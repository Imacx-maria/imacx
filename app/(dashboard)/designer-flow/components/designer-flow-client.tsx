'use client';

import React, { useState } from 'react';
// TODO: Import necessary types from Prisma (e.g., FolhaObra, Profile)
// import { FolhaObra, Profile } from '@prisma/client'; // Adjust if your client path is different

// TODO: Import Shadcn UI components (Button, Table, Dialog, Input, Select, Checkbox, Switch etc.)
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Switch } from '@/components/ui/switch';
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

// TODO: Import sub-components like HeaderControls, JobTable, NewJobDialog once created

// Define props based on data fetched in the Server Component (page.tsx)
// interface DesignerFlowClientProps {
//   initialJobs: (FolhaObra & { assignedProfile: Profile | null })[]; // Example type
//   designerProfiles: Profile[]; // Example type
// }

// Using any for now until types are properly imported/defined
interface DesignerFlowClientProps {
  initialJobs: any[];
  designerProfiles: any[];
}


export default function DesignerFlowClientComponent({ initialJobs, designerProfiles }: DesignerFlowClientProps) {
  // --- State Management ---
  const [jobs, setJobs] = useState(initialJobs);
  const [designers] = useState(designerProfiles); // Designers list likely won't change often here

  // Filters State
  const [filterOpen, setFilterOpen] = useState(true);
  const [filterFO, setFilterFO] = useState('');
  const [filterItem, setFilterItem] = useState('');

  // Modal State
  const [isNewJobDialogOpen, setIsNewJobDialogOpen] = useState(false);

  // Unsaved Changes State (more complex, might need different approach)
  const [unsavedChanges, setUnsavedChanges] = useState({}); // Placeholder

  // Loading/Submitting State
  const [isLoading, setIsLoading] = useState(false);

  // --- Event Handlers ---
  const handleRefresh = async () => {
    setIsLoading(true);
    try {
      // Fetch updated jobs data
      const response = await fetch('/api/jobs');
      const updatedJobs = await response.json();
      setJobs(updatedJobs);
    } catch (error) {
      console.error('Error refreshing data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveChanges = () => {
    console.log('TODO: Save changes', unsavedChanges);
    // Likely involves calling a server action with unsavedChanges payload
  };

  const handleAddJob = async (newJobData: any) => {
    setIsLoading(true);
    try {
      // Add the new job
      const response = await fetch('/api/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newJobData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to add job');
      }

      // Get the newly added job from the response
      const newJob = await response.json();
      
      // Update the jobs state with the new job
      setJobs(prevJobs => [...prevJobs, newJob]);
      
      setIsNewJobDialogOpen(false);
    } catch (error) {
      console.error('Error adding job:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // --- Filtering Logic ---
  const filteredJobs = React.useMemo(() => {
    return jobs.filter(job => {
      if (filterOpen && job.paginacao) return false; // Assuming 'paginacao' means completed
      if (filterFO && (!job.numero_fo || !job.numero_fo.toString().includes(filterFO))) return false;
      if (filterItem && (!job.item || !job.item.toLowerCase().includes(filterItem.toLowerCase()))) return false;
      return true;
    });
  }, [jobs, filterOpen, filterFO, filterItem]);

  // --- Render Logic ---
  return (
    <div>
      {/* TODO: Implement HeaderControls Component */}
      <div className="mb-4 p-4 border rounded bg-card text-card-foreground">
        <p>Header Controls Placeholder</p>
        {/* Filters (Switch, Input), Buttons (Add, Refresh, Save) go here */}
        <div className="flex items-center space-x-4 mb-4">
          {/* Designer Filter */}
          <select 
            className="p-2 border rounded"
            onChange={(e) => console.log('Selected designer:', e.target.value)}
          >
            <option value="">All Designers</option>
            {designers.map((designer) => (
              <option key={designer.id} value={designer.id}>
                {designer.first_name || 'Unnamed'}
              </option>
            ))}
          </select>

          <button onClick={() => setIsNewJobDialogOpen(true)} className="p-2 bg-primary text-primary-foreground rounded">Add Job (Opens Dialog)</button>
          <button onClick={handleRefresh} className="ml-2 p-2 bg-secondary text-secondary-foreground rounded">Refresh</button>
          {Object.keys(unsavedChanges).length > 0 && (
             <button onClick={handleSaveChanges} className="ml-2 p-2 bg-destructive text-destructive-foreground rounded">Save Changes</button>
          )}
        </div>
      </div>

      {/* TODO: Implement JobTable Component */}
      <div className="border rounded">
        <p>Job Table Placeholder</p>
        {/* Pass filteredJobs, designers, setUnsavedChanges etc. to JobTable */}
        <div className="p-4">
          <h3 className="font-semibold mb-2">Jobs and Assigned Designers:</h3>
          {filteredJobs.map((job) => {
            const assignedDesigner = designers.find(d => d.id === job.profile_id);
            return (
              <div key={job.id} className="mb-2 p-2 border rounded">
                <p>FO: {job.numero_fo}</p>
                <p>Designer: {assignedDesigner?.first_name || 'Unassigned'}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* TODO: Implement NewJobDialog Component (using Shadcn Dialog) */}
      {isNewJobDialogOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center" onClick={() => setIsNewJobDialogOpen(false)}>
          <div className="bg-background p-6 rounded-lg shadow-lg z-50 w-1/2" onClick={e => e.stopPropagation()}>
            <h2 className="text-lg font-semibold mb-4">Add New Job (Dialog Placeholder)</h2>
            <div className="mb-4">
              <label className="block mb-2">Assign Designer:</label>
              <select className="w-full p-2 border rounded">
                <option value="">Select Designer</option>
                {designers.map((designer) => (
                  <option key={designer.id} value={designer.id}>
                    {designer.first_name || 'Unnamed'}
                  </option>
                ))}
              </select>
            </div>
            <p>Form content goes here...</p>
            <button onClick={() => setIsNewJobDialogOpen(false)} className="mt-4 p-2 bg-secondary text-secondary-foreground rounded">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}