import { useState } from 'react'
import { useProjects, Project } from '../hooks/useProjects'
import { ProjectCard } from '../components/projects/ProjectCard'
import { ProjectForm } from '../components/projects/ProjectForm'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Dialog } from '../components/ui/dialog'
import { Plus, Search, Filter, Loader2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Empty } from '../components/ui/empty'

export function Dashboard() {
  const { projects, loading, addProject, updateProject, deleteProject } = useProjects()
  const [searchQuery, setSearchQuery] = useState('')
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingProject, setEditingProject] = useState<Project | null>(null)

  const filteredProjects = projects.filter(project => 
    project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.tags?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.category?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleEdit = (project: Project) => {
    setEditingProject(project)
    setIsDialogOpen(true)
  }

  const handleAdd = () => {
    setEditingProject(null)
    setIsDialogOpen(true)
  }

  const handleFormSubmit = async (data: any) => {
    if (editingProject) {
      await updateProject(editingProject.id, data)
    } else {
      await addProject(data)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Actions */}
      <div className="mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Projects</h1>
          <p className="text-muted-foreground">Manage and showcase your best work.</p>
        </div>
        <div className="flex w-full items-center gap-2 sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input 
              placeholder="Search projects..." 
              className="pl-9"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Button onClick={handleAdd}>
            <Plus className="mr-2 h-4 w-4" />
            Add Project
          </Button>
        </div>
      </div>

      {/* Projects Grid */}
      {loading ? (
        <div className="flex h-64 items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : filteredProjects.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
              >
                <ProjectCard 
                  project={project} 
                  onEdit={handleEdit}
                  onDelete={deleteProject}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <Empty 
          title={searchQuery ? "No matching projects" : "No projects yet"}
          description={searchQuery ? "Try a different search term." : "Start by adding your first project to showcase."}
          action={
            !searchQuery && (
              <Button onClick={handleAdd}>
                <Plus className="mr-2 h-4 w-4" />
                Add Project
              </Button>
            )
          }
        />
      )}

      {/* Add/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <ProjectForm 
          project={editingProject}
          onSubmit={handleFormSubmit}
          onClose={() => setIsDialogOpen(false)}
        />
      </Dialog>
    </div>
  )
}
