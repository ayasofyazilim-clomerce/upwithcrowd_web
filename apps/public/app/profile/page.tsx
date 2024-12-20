'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

// Mock user data
const initialUserData = {
  name: "John",
  surname: "Doe",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  bio: "Passionate about crowdfunding and supporting innovative projects.",
  profileImage: "/placeholder.svg"
}

export default function ProfilePage() {
  const [userData, setUserData] = useState(initialUserData)
  const [isEditing, setIsEditing] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setUserData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setUserData(prevData => ({ ...prevData, profileImage: reader.result as string }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSave = () => {
    // Here you would typically send the updated data to your backend
    console.log('Saving user data:', userData)
    setIsEditing(false)
  }

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">User Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center mb-6">
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src={userData.profileImage}
                  alt="Profile"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              {isEditing && (
                <div>
                  <Label htmlFor="profileImage" className="cursor-pointer text-primary hover:underline">
                    Change Profile Picture
                  </Label>
                  <Input
                    id="profileImage"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </div>
              )}
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">First Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={userData.name}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
              <div>
                <Label htmlFor="surname">Last Name</Label>
                <Input
                  id="surname"
                  name="surname"
                  value={userData.surname}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={userData.email}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={userData.phone}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
              <div>
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  name="bio"
                  value={userData.bio}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  rows={4}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            {isEditing ? (
              <>
                <Button onClick={() => setIsEditing(false)} variant="outline" className="mr-2">
                  Cancel
                </Button>
                <Button onClick={handleSave}>Save Changes</Button>
              </>
            ) : (
              <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

