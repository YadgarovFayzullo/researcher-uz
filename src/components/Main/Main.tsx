'use client';

import { useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Sun, Moon } from 'lucide-react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={cn('min-h-screen p-6', darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black')}>
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold ">Научная электронная библиотека</h1>
        <div className="flex items-center space-x-2">
          <Sun className="w-5 h-5" />
          <Switch checked={darkMode} onCheckedChange={setDarkMode} />
          <Moon className="w-5 h-5" />
        </div>
      </header>

      <div className="mb-4">
        <Input placeholder="Поиск..." className="w-full md:w-1/2" />
        <Button className="ml-2">Искать</Button>
      </div>

      <section>
        <h2 className="text-xl font-semibold mb-4">Популярные статьи</h2>
        <div className="space-y-4">
          {articles.map((article, index) => (
            <Card key={index} className="p-4">
              <CardContent>
                <h3 className="text-lg font-medium">{article.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{article.views} просмотров</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

const articles = [
  { title: 'Уголовный кодекс Финляндии 1889 г. как законодательный источник', views: 16653 },
  { title: 'Детская порнография в сети Интернет: состояние проблемы', views: 3302 },
  { title: 'NIZOLAR VA ULARNI BOSHQARISH TARTIBI', views: 3206 },
  { title: 'Нумизматика: история науки, современное состояние', views: 1984 },
  { title: 'Развитие робототехники и ее будущее', views: 1846 },
];