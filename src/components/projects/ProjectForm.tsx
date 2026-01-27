import { useState, useEffect } from 'react'
import { Project } from '../../hooks/useProjects'
import { 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from '../ui/dialog'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Label } from '../ui/label'

interface ProjectFormProps {
  project?: Project | null
  onSubmit: (data: Omit<Project, 'id' | 'userId' | 'createdAt'>) => Promise<void>
  onClose: () => void
}

export function ProjectForm({ project, onSubmit, onClose }: ProjectFormProps) {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    url: '',
    githubUrl: '',
    thumbnailUrl: '',
    category: '',
    tags: ''
  })

  useEffect(() => {
    if (project) {
      setFormData({
        name: project.name || '',
        description: project.description || '',
        url: project.url || '',
        githubUrl: project.githubUrl || '',
        thumbnailUrl: project.thumbnailUrl || '',
        category: project.category || '',
        tags: project.tags || ''
      })
    }
  }, [project])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await onSubmit(formData)
      onClose()
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <DialogContent className="sm:max-max-w-xl">
      <form onSubmit={handleSubmit}>
        <DialogHeader>
          <DialogTitle>{project ? 'Edit Project' : 'Add New Project'}</DialogTitle>
          <DialogDescription>
            Fill in the details below to showcase your project.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Project Name</Label>
            <Input 
              id="name" 
              placeholder="My Awesome Project" 
              value={formData.name}
              onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
              required 
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea 
              id="description" 
              placeholder="Describe what your project does..." 
              value={formData.description}
              onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
              className="min-h-[100px]"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="url">Live URL</Label>
              <Input 
                id="url" 
                placeholder="https://example.com" 
                value={formData.url}
                onChange={e => setFormData(prev => ({ ...prev, url: e.target.value }))}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="githubUrl">GitHub URL</Label>
              <Input 
                id="githubUrl" 
                placeholder="https://github.com/..." 
                value={formData.githubUrl}
                onChange={e => setFormData(prev => ({ ...prev, githubUrl: e.target.value }))}
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="thumbnailUrl">Thumbnail URL</Label>
            <Input 
              id="thumbnailUrl" 
              placeholder="https://images.unsplash.com/..." 
              value={formData.thumbnailUrl}
              onChange={e => setFormData(prev => ({ ...prev, thumbnailUrl: e.target.value }))}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="category">Category</Label>
              <Input 
                id="category" 
                placeholder="Web App, Mobile, etc." 
                value={formData.category}
                onChange={e => setFormData(prev => ({ ...prev, category: e.target.value }))}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="tags">Tags (comma separated)</Label>
              <Input 
                id="tags" 
                placeholder="React, TypeScript, Tailwind" 
                value={formData.tags}
                onChange={e => setFormData(prev => ({ ...prev, tags: e.target.value }))}
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="button" variant="outline" onClick={onClose} disabled={loading}>
            Cancel
          </Button>
          <Button type="submit" disabled={loading}>
            {loading ? 'Saving...' : 'Save Project'}
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
