import type { ComponentType } from 'react';

export type Status = 'ready' | 'planned';
export type Category = 'top' | 'foundation' | 'component' | 'resource';

export interface RouteEntry {
  path: string;
  label: string;
  category: Category;
  status?: Status;
  description?: string;
  load?: () => Promise<{ default: ComponentType<unknown> }>;
}

export const routes: RouteEntry[] = [
  { path: '/',                 label: 'Home',            category: 'top', load: () => import('../pages/Home.js') },
  { path: '/getting-started',  label: 'Getting Started', category: 'top', load: () => import('../pages/GettingStarted.mdx') },

  // Foundations — tokens collected from the Tally apps on 2026-07-21
  { path: '/foundations/color',      label: 'Color',      category: 'foundation', load: () => import('../pages/foundations/Color.mdx') },
  { path: '/foundations/typography', label: 'Typography', category: 'foundation', load: () => import('../pages/foundations/Typography.mdx') },
  { path: '/foundations/spacing',    label: 'Spacing',    category: 'foundation', load: () => import('../pages/foundations/Spacing.mdx') },
  { path: '/foundations/radius',     label: 'Radius',     category: 'foundation', load: () => import('../pages/foundations/Radius.mdx') },
  { path: '/foundations/elevation',  label: 'Elevation',  category: 'foundation', load: () => import('../pages/foundations/Elevation.mdx') },

  // Components — Tally, alphabetical
  { path: '/components/account-switcher',   label: 'Account Switcher',   category: 'component', status: 'ready', description: 'Account switcher component.',   load: () => import('../pages/components/TallyAccountSwitcher.mdx') },
  { path: '/components/avatar',             label: 'Avatar',             category: 'component', status: 'ready', description: 'Avatar atom.',             load: () => import('../pages/components/TallyAvatar.mdx') },
  { path: '/components/badge',              label: 'Badge',              category: 'component', status: 'ready', description: 'Badge atom.',              load: () => import('../pages/components/TallyBadge.mdx') },
  { path: '/components/breadcrumb',         label: 'Breadcrumb',         category: 'component', status: 'ready', description: 'Breadcrumb component.',         load: () => import('../pages/components/TallyBreadcrumb.mdx') },
  { path: '/components/button',             label: 'Button',             category: 'component', status: 'ready', description: 'Button atom.',             load: () => import('../pages/components/TallyButton.mdx') },
  { path: '/components/chart-tooltip',      label: 'Chart Tooltip',      category: 'component', status: 'ready', description: 'Chart tooltip component.',      load: () => import('../pages/components/TallyChartTooltip.mdx') },
  { path: '/components/checkbox',           label: 'Checkbox',           category: 'component', status: 'ready', description: 'Checkbox atom.',           load: () => import('../pages/components/TallyCheckbox.mdx') },
  { path: '/components/combobox',           label: 'Combobox',           category: 'component', status: 'ready', description: 'Combobox component.',           load: () => import('../pages/components/TallyCombobox.mdx') },
  { path: '/components/drop-zone',          label: 'Drop Zone',          category: 'component', status: 'ready', description: 'Drop zone component.',          load: () => import('../pages/components/TallyDropZone.mdx') },
  { path: '/components/dropdown',           label: 'Dropdown',           category: 'component', status: 'ready', description: 'Dropdown component.',           load: () => import('../pages/components/TallyDropdown.mdx') },
  { path: '/components/empty-state',        label: 'Empty State',        category: 'component', status: 'ready', description: 'Empty state component.',        load: () => import('../pages/components/TallyEmptyState.mdx') },
  { path: '/components/file-list',          label: 'File List',          category: 'component', status: 'ready', description: 'File list component.',          load: () => import('../pages/components/TallyFileList.mdx') },
  { path: '/components/gantt-bar',          label: 'Gantt Bar',          category: 'component', status: 'ready', description: 'Gantt bar component.',          load: () => import('../pages/components/TallyGanttBar.mdx') },
  { path: '/components/text-input',         label: 'Input',              category: 'component', status: 'ready', description: 'Input atom.',            load: () => import('../pages/components/TallyInput.mdx') },
  { path: '/components/kpi-card',           label: 'KPI Card',           category: 'component', status: 'ready', description: 'KPI card component.',           load: () => import('../pages/components/TallyKpiCard.mdx') },
  { path: '/components/legend',             label: 'Legend',             category: 'component', status: 'ready', description: 'Legend component.',             load: () => import('../pages/components/TallyLegend.mdx') },
  { path: '/components/list-base',          label: 'List Base',          category: 'component', status: 'ready', description: 'List base atom.',        load: () => import('../pages/components/TallyListBase.mdx') },
  { path: '/components/loading-spinner',    label: 'Loading Spinner',    category: 'component', status: 'ready', description: 'Loading spinner atom.',  load: () => import('../pages/components/TallyLoadingSpinner.mdx') },
  { path: '/components/nav-item',           label: 'Nav Item',           category: 'component', status: 'ready', description: 'Nav item component.',           load: () => import('../pages/components/TallyNavItem.mdx') },
  { path: '/components/nav-section',        label: 'Nav Section',        category: 'component', status: 'ready', description: 'Nav section component.',        load: () => import('../pages/components/TallyNavSection.mdx') },
  { path: '/components/pagination',         label: 'Pagination',         category: 'component', status: 'ready', description: 'Pagination component.',         load: () => import('../pages/components/TallyPagination.mdx') },
  { path: '/components/progress-bar',       label: 'Progress Bar',       category: 'component', status: 'ready', description: 'Progress bar component.',       load: () => import('../pages/components/TallyProgressBar.mdx') },
  { path: '/components/progress-bar-base',  label: 'Progress Bar Base',  category: 'component', status: 'ready', description: 'Progress bar base component.',  load: () => import('../pages/components/TallyProgressBarBase.mdx') },
  { path: '/components/progress-ring',      label: 'Progress Ring',      category: 'component', status: 'ready', description: 'Progress ring component.',      load: () => import('../pages/components/TallyProgressRing.mdx') },
  { path: '/components/progress-value-bar', label: 'Progress Value Bar', category: 'component', status: 'ready', description: 'Progress value bar component.', load: () => import('../pages/components/TallyProgressValueBar.mdx') },
  { path: '/components/radio',              label: 'Radio',              category: 'component', status: 'ready', description: 'Radio atom.',            load: () => import('../pages/components/TallyRadio.mdx') },
  { path: '/components/search-field',       label: 'Search Field',       category: 'component', status: 'ready', description: 'Search field component.',       load: () => import('../pages/components/TallySearchField.mdx') },
  { path: '/components/segmented-button',   label: 'Segmented Button',   category: 'component', status: 'ready', description: 'Segmented button atom.', load: () => import('../pages/components/TallySegmentedButton.mdx') },
  { path: '/components/separator',          label: 'Separator',          category: 'component', status: 'ready', description: 'Separator atom.',        load: () => import('../pages/components/TallySeparator.mdx') },
  { path: '/components/skill-level',        label: 'Skill Level',        category: 'component', status: 'ready', description: 'Skill level component.',        load: () => import('../pages/components/TallySkillLevel.mdx') },
  { path: '/components/slider',             label: 'Slider',             category: 'component', status: 'ready', description: 'Slider atom.',           load: () => import('../pages/components/TallySlider.mdx') },
  { path: '/components/switch',             label: 'Switch',             category: 'component', status: 'ready', description: 'Switch atom.',           load: () => import('../pages/components/TallySwitch.mdx') },
  { path: '/components/tag',                label: 'Tag',                category: 'component', status: 'ready', description: 'Tag atom.',              load: () => import('../pages/components/TallyTag.mdx') },
  { path: '/components/text-area',          label: 'Text Area',          category: 'component', status: 'ready', description: 'Text area atom.',        load: () => import('../pages/components/TallyTextArea.mdx') },
  { path: '/components/text-field',         label: 'Text Field',         category: 'component', status: 'ready', description: 'Text field component.',       load: () => import('../pages/components/TallyTextField.mdx') },
  { path: '/components/timeline',           label: 'Timeline',           category: 'component', status: 'ready', description: 'Timeline component.',           load: () => import('../pages/components/TallyTimeline.mdx') },
  { path: '/components/toast',              label: 'Toast',              category: 'component', status: 'ready', description: 'Toast component.',              load: () => import('../pages/components/TallyToast.mdx') },
  { path: '/components/tooltip',            label: 'Tooltip',            category: 'component', status: 'ready', description: 'Tooltip atom.',          load: () => import('../pages/components/TallyTooltip.mdx') },

  // Resources
  { path: '/changelog', label: 'Changelog', category: 'resource', load: () => import('../pages/Changelog.mdx') },
];

export const topRoutes = routes.filter((r) => r.category === 'top');
export const foundationRoutes = routes.filter((r) => r.category === 'foundation');
export const componentRoutes = routes.filter((r) => r.category === 'component');
export const resourceRoutes = routes.filter((r) => r.category === 'resource');

export interface GroupMeta {
  id: string;
  label: string;
}

export const groupMeta = {
  foundations: { id: 'foundations', label: 'Foundations' } satisfies GroupMeta,
  components:  { id: 'components',  label: 'Components'  } satisfies GroupMeta,
  resources:   { id: 'resources',   label: 'Resources'   } satisfies GroupMeta,
};
