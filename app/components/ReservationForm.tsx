"use client"

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"

export function ReservationForm({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (open: boolean) => void }) {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [people, setPeople] = useState('')
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the reservation data to your backend
    console.log('Reservation submitted:', { date, time, people })
    
    // Show toast message
    toast({
      title: "Table Reserved!",
      description: `Your table has been booked for ${date} at ${time} for ${people} ${parseInt(people) === 1 ? 'person' : 'people'}.`,
      duration: 5000,
    })

    // Close the dialog
    setIsOpen(false)

    // Reset form fields
    setDate('')
    setTime('')
    setPeople('')
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px] bg-white border border-gray-200 shadow-lg">
        <DialogHeader>
          <DialogTitle>Reserve a Table</DialogTitle>
          <DialogDescription>
            Fill in the details below to make your reservation.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="date">Date</Label>
            <Input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="time">Time</Label>
            <Input
              id="time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="people">Number of People</Label>
            <Select value={people} onValueChange={setPeople}>
              <SelectTrigger id="people" className="bg-white text-gray-900 border border-gray-300">
                <SelectValue placeholder="Select number of people" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <SelectItem key={num} value={num.toString()} className="text-gray-900">
                    {num} {num === 1 ? 'person' : 'people'}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-end space-x-2">
            <DialogClose asChild>
              <Button type="button" variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Reserve</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

