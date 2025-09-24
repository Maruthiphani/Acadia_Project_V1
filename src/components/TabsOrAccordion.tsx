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
  cardStyle?: boolean;
}

const TabsOrAccordion: React.FC<TabsOrAccordionProps> = ({ 
  items, 
  defaultActive,
  variant = 'tabs',
  cardStyle = false
}) => {
  const [activeTab, setActiveTab] = useState(defaultActive || items[0]?.id);
  const [openAccordion, setOpenAccordion] = useState<string | null>(defaultActive || items[0]?.id);

  if (variant === 'accordion') {
    return (
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className={cardStyle ? "bg-white rounded-2xl shadow-lg border border-gray-100" : "border border-gray-200 rounded-lg"}>
            <button
              onClick={() => setOpenAccordion(openAccordion === item.id ? null : item.id)}
              className={`w-full px-6 py-4 text-left flex items-center justify-between transition-colors duration-200 ${cardStyle ? "text-gray-900 hover:bg-gray-50" : "hover:bg-gray-50"}`}
              aria-expanded={openAccordion === item.id}
            >
              <span className={`font-semibold ${cardStyle ? "text-gray-900" : "text-gray-900"}`}>{item.label}</span>
              <ChevronDown 
                size={20} 
                className={`transform transition-transform duration-200 ${cardStyle ? "text-gray-600" : "text-gray-600"} ${
                  openAccordion === item.id ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openAccordion === item.id && (
              <div className={`px-6 pb-6 ${cardStyle ? "" : "border-t border-gray-100"}`}>
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
      <div className={`mb-8 ${cardStyle ? "" : "border-b border-gray-200"}`}>
        <nav className="flex space-x-8">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`py-4 px-1 font-medium text-sm transition-colors duration-200 ${cardStyle ? "" : "border-b-2"} ${
                activeTab === item.id
                  ? cardStyle 
                    ? 'text-accent-violet bg-white rounded-t-lg px-4 py-2 shadow-sm border-b-2 border-accent-violet'
                    : 'border-accent-violet text-accent-violet'
                  : cardStyle
                    ? 'text-white hover:text-gray-200 px-4 py-2'
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
      <div className={cardStyle ? "bg-white rounded-2xl shadow-lg p-8" : ""}>
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