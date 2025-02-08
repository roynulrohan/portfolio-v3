import { Tab } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fragment, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface TabItem {
    id: string;
    label: string;
    icon?: string;
    content: ReactNode;
}

interface TabViewProps {
    tabs: TabItem[];
    selectedIndex: number;
    onChange: (index: number) => void;
    className?: string;
}

export function TabView({ tabs, selectedIndex, onChange, className = '' }: TabViewProps) {
    return (
        <div className={twMerge('bg-base-300/30 backdrop-blur-xl rounded-xl border border-teal-400/20 overflow-hidden shadow-2xl', className)}>
            {/* Window Header with Integrated Tabs */}
            <div className='relative flex items-center'>
                {/* Traffic Lights */}
                <Tab.Group selectedIndex={selectedIndex} onChange={onChange}>
                    {/* Tab Bar */}
                    <Tab.List className='flex px-24 pt-2 relative items-center'>
                        <div className='absolute left-5 flex gap-2 z-10'>
                            <div className='w-3 h-3 rounded-full bg-red-400/80 backdrop-blur-sm'></div>
                            <div className='w-3 h-3 rounded-full bg-yellow-400/80 backdrop-blur-sm'></div>
                            <div className='w-3 h-3 rounded-full bg-green-400/80 backdrop-blur-sm'></div>
                        </div>
                        <div className='flex gap-2 relative'>
                            {tabs.map((tab) => (
                                <Tab key={tab.id} as={Fragment}>
                                    {({ selected }) => (
                                        <button
                                            className={twMerge(
                                                'relative px-8 py-4 text-base font-medium rounded-t-2xl',
                                                'flex items-center gap-2.5 w-[160px] justify-center',
                                                'transition-colors duration-200',
                                                'text-white/60 bg-base-300/30',
                                                'hover:text-white/80 hover:bg-base-300/50',
                                                'focus:outline-none',
                                                'border-t border-l border-r border-teal-400/0',
                                                selected && ['text-white', 'bg-base-300/50', 'border-t border-l border-r border-teal-400/50']
                                            )}>
                                            {tab.icon && (
                                                <span
                                                    className={twMerge('text-xl transition-colors duration-200', selected ? 'text-teal-400' : 'text-white/60')}>
                                                    {tab.icon}
                                                </span>
                                            )}
                                            {tab.label}
                                            {selected && <div className='absolute -bottom-[1px] left-0 right-0 h-[1px] bg-base-300/50' />}
                                        </button>
                                    )}
                                </Tab>
                            ))}
                        </div>
                    </Tab.List>

                    {/* Content Area */}
                    <div className='border-t border-teal-400/30 bg-base-300/40'>
                        <Tab.Panels>
                            <AnimatePresence mode='wait' initial={false}>
                                {tabs.map(
                                    (tab, idx) =>
                                        selectedIndex === idx && (
                                            <Tab.Panel
                                                key={tab.id}
                                                as={motion.div}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{
                                                    duration: 0.2,
                                                    ease: 'easeInOut',
                                                }}
                                                className='p-10'
                                                static>
                                                {tab.content}
                                            </Tab.Panel>
                                        )
                                )}
                            </AnimatePresence>
                        </Tab.Panels>
                    </div>
                </Tab.Group>
            </div>
        </div>
    );
}
