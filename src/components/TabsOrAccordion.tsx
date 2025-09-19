import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsOrAccordionProps {
  items: TabItem[];
  defaultActive?: string;
  variant?: 'tabs' | 'accordion';
}

const TabsOrAccordion: React.FC<TabsOrAccordionProps> = ({ 
  items, 
  defaultActive,
  variant = 'tabs' 
}) => {
  const [activeTab, setActiveTab] = useState(defaultActive || items[0]?.id);
  const [openAccordion, setOpenAccordion] = useState<string | null>(defaultActive || items[0]?.id);

  if (variant === 'accordion') {
    return (
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="border border-gray-200 rounded-lg">
            <button
              onClick={() => setOpenAccordion(openAccordion === item.id ? null : item.id)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              aria-expanded={openAccordion === item.id}
            >
              <span className="font-semibold text-gray-900">{item.label}</span>
              <ChevronDown 
                size={20} 
                className={`transform transition-transform duration-200 ${
                  openAccordion === item.id ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openAccordion === item.id && (
              <div className="px-6 pb-6 border-t border-gray-100">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      {/* Tabs Navigation */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="flex space-x-8">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                activeTab === item.id
                  ? 'border-accent-violet text-accent-violet'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              aria-current={activeTab === item.id ? 'page' : undefined}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div>
        {items.map((item) => (
          <div
            key={item.id}
            className={activeTab === item.id ? 'block' : 'hidden'}
            role="tabpanel"
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabsOrAccordion;