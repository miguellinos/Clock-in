// Thin client for the Clockify REST API: https://docs.clockify.me/
// Clockify stays the system of record; Clock-in only translates block gestures into these calls.

const BASE_URL = 'https://api.clockify.me/api/v1'

export interface ClockifyUser {
  id: string
  name: string
  defaultWorkspace: string
}

export interface ClockifyProject {
  id: string
  name: string
  color: string
}

export interface ClockifyTask {
  id: string
  name: string
  projectId: string
}

export interface ClockifyTimeEntry {
  id: string
  description: string
  projectId: string | null
  taskId: string | null
  timeInterval: { start: string; end: string | null }
}

export interface TimeEntryInput {
  start: string
  end?: string
  description?: string
  projectId?: string
  taskId?: string
}

export class ClockifyClient {
  private readonly apiKey: string

  constructor(apiKey: string) {
    this.apiKey = apiKey
  }

  private async request<T>(path: string, init: RequestInit = {}): Promise<T> {
    const res = await fetch(`${BASE_URL}${path}`, {
      ...init,
      headers: { 'X-Api-Key': this.apiKey, 'Content-Type': 'application/json', ...init.headers },
    })
    if (!res.ok) throw new Error(`Clockify ${init.method ?? 'GET'} ${path} failed: ${res.status}`)
    return res.status === 204 ? (undefined as T) : res.json()
  }

  currentUser() {
    return this.request<ClockifyUser>('/user')
  }

  projects(workspaceId: string) {
    return this.request<ClockifyProject[]>(`/workspaces/${workspaceId}/projects?archived=false`)
  }

  tasks(workspaceId: string, projectId: string) {
    return this.request<ClockifyTask[]>(`/workspaces/${workspaceId}/projects/${projectId}/tasks`)
  }

  timeEntries(workspaceId: string, userId: string, start: string, end: string) {
    const query = new URLSearchParams({ start, end })
    return this.request<ClockifyTimeEntry[]>(
      `/workspaces/${workspaceId}/user/${userId}/time-entries?${query}`,
    )
  }

  createTimeEntry(workspaceId: string, entry: TimeEntryInput) {
    return this.request<ClockifyTimeEntry>(`/workspaces/${workspaceId}/time-entries`, {
      method: 'POST',
      body: JSON.stringify(entry),
    })
  }

  updateTimeEntry(workspaceId: string, id: string, entry: TimeEntryInput) {
    return this.request<ClockifyTimeEntry>(`/workspaces/${workspaceId}/time-entries/${id}`, {
      method: 'PUT',
      body: JSON.stringify(entry),
    })
  }

  deleteTimeEntry(workspaceId: string, id: string) {
    return this.request<void>(`/workspaces/${workspaceId}/time-entries/${id}`, { method: 'DELETE' })
  }
}
