"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Page() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
      <div className="w-full max-w-lg space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Настройки профиля</h1>
          <ThemeToggle />
        </div>
        <Card>
          <CardContent className="p-6 space-y-4">
            <div>
              <Label htmlFor="name">Имя</Label>
              <Input
                id="name"
                placeholder="Введите имя"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Введите email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <Button className="w-full">Сохранить</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
