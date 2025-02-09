import { AchievementSpec } from './util/achievementsHelpers';

export default AchievementSpec({
  'repos-with-merges': {
    getCount: ({ merged_pulls }) => Object.keys(merged_pulls).length,
    achievements: [
      { count: 2, title: 'Gemini', details: 'PRs in 2 Astro repos' },
      { count: 3, title: 'Astronomer', details: 'PRs in 3 Astro repos' },
      {
        count: 6,
        title: 'Constellation Crafter',
        details: 'PRs in 6 Astro repos',
      },
    ],
  },
  'i18n-reviews': {
    stat: 'reviews_by_category',
    category: 'i18n',
    achievements: [
      { count: 1, title: 'Proofreader', details: 'Reviewed an i18n PR' },
      { count: 15, title: 'Polyglot', details: 'Reviewed 15 i18n PRs' },
      { count: 40, title: 'Rosetta Stone', details: 'Reviewed 40 i18n PRs' }
    ]
  },
  'i18n-merges': {
    stat: 'merged_pulls_by_label',
    label: 'i18n',
    achievements: [
      { count: 1, title: 'Decoder', details: 'First i18n PR' },
      { count: 15, title: 'Babel Fish', details: '15 i18n PRs' },
      { count: 40, title: 'Universal Translator', details: '40 i18n PRs' }
    ]
  },
  'total-reviews': {
    stat: 'reviews',
    achievements: [
      { count: 1, title: 'Spot Check', details: 'Reviewed a PR' },
      { count: 10, title: 'Copilot', details: 'Reviewed 10 PRs' },
      { count: 30, title: 'PR Perfectionist', details: 'Reviewed 30 PRs' },
    ],
  },
  'astro-merges': {
    repo: 'astro',
    stat: 'merges',
    achievements: [
      { count: 1, title: 'Space Cadet', details: 'First astro PR' },
      { count: 10, title: 'Technician', details: '10 astro PRs' },
      { count: 30, title: 'Rocket Scientist', details: '30 astro PRs' },
    ],
  },
  'docs-merges': {
    repo: 'docs',
    stat: 'merges',
    achievements: [
      { count: 1, title: 'Docs Padawan', details: 'First docs PR' },
      { count: 10, title: 'Scholar', details: '10 docs PRs' },
      { count: 30, title: 'Galactic Librarian', details: '30 docs PRs' },
    ],
  },
  'rfc-merges': {
    repo: 'roadmap',
    stat: 'merges',
    achievements: [
      { count: 1, title: 'Visionary', details: 'First roadmap PR' },
      { count: 5, title: 'Mission Control', details: '5 roadmap PRs' },
      { count: 15, title: 'Feature Creature', details: '15 roadmap PRs' },
    ],
  },
  'prettier-merges': {
    repo: 'prettier-plugin-astro',
    stat: 'merges',
    achievements: [
      { count: 1, title: 'Aesthete', details: 'First prettier-plugin PR' },
      { count: 10, title: 'Format Focused', details: '10 prettier-plugin PRs' },
      {
        count: 30,
        title: 'Prettiest of Them All',
        details: '30 prettier-plugin PRs',
      },
    ],
  },
  'compiler-merges': {
    repo: 'compiler',
    stat: 'merges',
    achievements: [
      { count: 1, title: 'Mechanic', details: 'First compiler PR' },
      { count: 10, title: 'Go Pro', details: '10 compiler PRs' },
      { count: 30, title: 'Spline Reticulator', details: '30 compiler PRs' },
    ],
  },
  'language-tools-merges': {
    repo: 'language-tools',
    stat: 'merges',
    achievements: [
      { count: 1, title: 'Subeditor', details: 'First language-tools PR' },
      { count: 10, title: 'Linguist', details: '10 language-tools PRs' },
      { count: 30, title: 'Token Wrangler', details: '30 language-tools PRs' },
    ],
  },
  'astro.new-merges': {
    repo: 'astro.new',
    stat: 'merges',
    achievements: [
      { count: 1, title: 'Launch Pad', details: 'First astro.new PR' },
      { count: 5, title: 'Browser IDEator', details: '5 astro.new PRs' },
      { count: 15, title: 'New Code, Who Dis?', details: '15 astro.new PRs' },
    ],
  },
  'action-merges': {
    repo: 'action',
    stat: 'merges',
    achievements: [
      { count: 1, title: 'Deploy Buddy', details: 'First withastro/action PR' },
      { count: 5, title: 'Action Packed', details: '5 withastro/action PRs' },
      { count: 15, title: 'Action Hero', details: '15 withastro/action PRs' },
    ],
  },
  'houston-ai-merges': {
    repo: 'houston.astro.build',
    stat: 'merges',
    achievements: [
      {
        count: 1,
        title: 'HAL-lo World',
        details: 'First houston.astro.build PR',
      },
      { count: 5, title: 'Droid Dev', details: '5 houston.astro.build PRs' },
      {
        count: 15,
        title: 'Modern Prometheus',
        details: '15 houston.astro.build PRs',
      },
    ],
  },
  'starlight-merges': {
    repo: 'starlight',
    stat: 'merges',
    achievements: [
      { count: 1, title: 'Twinkle, twinkle', details: 'First starlight PR' },
      { count: 10, title: 'Stargazer', details: '10 starlight PRs' },
      { count: 30, title: 'Superstar', details: '30 starlight PRs' },
    ],
  },
  'hacktoberfest-merges': {
    stat: 'merged_pulls_by_label',
    label: 'hacktoberfest-accepted',
    achievements: [
      { count: 1, title: 'Hacker', details: '1 Hacktoberfest contribution' },
      { count: 5, title: 'Commit or Treat', details: '5 Hacktoberfest contributions' },
      { count: 15, title: 'Hack-o-Lantern', details: '15 Hacktoberfest contributions' },
    ],
  },
  'total-issues': {
    stat: 'issues',
    achievements: [
      { count: 1, title: 'Little Green Bug', details: 'Opened an issue' },
      { count: 10, title: 'Pest Control', details: 'Opened 10 issues' },
      { count: 30, title: 'Entomologist', details: 'Opened 30 issues' },
    ],
  },
});
