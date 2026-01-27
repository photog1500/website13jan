import { useState, useEffect } from 'react'
import { blink } from '../lib/blink'
import { useAuth } from '../hooks/useAuth'
import { toast } from 'sonner'

export interface Project {
  id: string
  userId: string
  name: string
  description: string
  url: string
  githubUrl: string
  thumbnailUrl: string
  category: string
  tags: string
  createdAt: string
}

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const { user } = useAuth()

  const fetchProjects = async () => {
    if (!user) return
    try {
      setLoading(true)
      const data = await blink.db.projects.list({
        where: { userId: user.id },
        orderBy: { createdAt: 'desc' }
      }) as Project[]
      setProjects(data)
    } catch (error) {
      console.error('Error fetching projects:', error)
      toast.error('Failed to load projects')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [user])

  const addProject = async (project: Omit<Project, 'id' | 'userId' | 'createdAt'>) => {
    if (!user) return
    try {
      const newProject = await blink.db.projects.create({
        ...project,
        userId: user.id
      }) as Project
      setProjects(prev => [newProject, ...prev])
      toast.success('Project added successfully')
      return newProject
    } catch (error) {
      console.error('Error adding project:', error)
      toast.error('Failed to add project')
    }
  }

  const updateProject = async (id: string, project: Partial<Project>) => {
    try {
      const updated = await blink.db.projects.update(id, project) as Project
      setProjects(prev => prev.map(p => p.id === id ? updated : p))
      toast.success('Project updated successfully')
      return updated
    } catch (error) {
      console.error('Error updating project:', error)
      toast.error('Failed to update project')
    }
  }

  const deleteProject = async (id: string) => {
    try {
      await blink.db.projects.delete(id)
      setProjects(prev => prev.filter(p => p.id !== id))
      toast.success('Project deleted successfully')
    } catch (error) {
      console.error('Error deleting project:', error)
      toast.error('Failed to delete project')
    }
  }

  return {
    projects,
    loading,
    addProject,
    updateProject,
    deleteProject,
    refresh: fetchProjects
  }
}
