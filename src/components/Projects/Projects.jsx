import React from 'react'
import './Projects.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import useReveal from '../utils/useReveal'

const featured = [
  {
    name: 'AI Campaign Strategist',
    description: 'Agentic system that takes a brand\'s website and returns a costed influencer campaign plan — multi-phase orchestrator, typed tool registry, live web research and streamed progress.',
    tags: ['OpenAI function calling', 'Agents', 'Rails'],
  },
  {
    name: 'Semantic Creator Search',
    description: 'Embedding layer for creator discovery: profiles and captions embedded with OpenAI, indexed in Pinecone, kept fresh by async workers and blended with MySQL filters.',
    tags: ['Embeddings', 'Pinecone', 'Sidekiq'],
  },
  {
    name: 'Creator Payouts Stack',
    description: 'Migrated disbursements from Razorpay to Cashfree with webhook ingestion, reconciliation for stuck payouts, TDS rules and bulk payment tooling.',
    tags: ['Payments', 'Webhooks', 'MySQL'],
  },
  {
    name: 'Sidekiq OOM Watchdog',
    description: 'Opt-in watchdog that samples worker memory and writes a heap dump before the OOM killer fires, plus a heap-diff analyzer and runbook for production incidents.',
    tags: ['Ruby', 'Observability', 'Debugging'],
  },
];

const projects = [
  {
    name: 'Portfolio',
    file: 'portfolio/',
    description: 'This very site — a React single-page portfolio with a terminal-inspired design.',
    repo: 'https://github.com/Daksh-Prajapati-49/Portfolio',
    languages: [['JavaScript', 59.7], ['CSS', 34.2], ['HTML', 6.1]],
  },
  {
    name: 'GoCabs',
    file: 'gocabs/',
    description: 'A cab booking web app for finding and scheduling rides.',
    repo: 'https://github.com/Daksh-Prajapati-49/GoCabs',
    languages: [['JavaScript', 97.5], ['HTML', 2.0], ['CSS', 0.5]],
  },
  {
    name: 'Travel Advisor',
    file: 'travel_advisor/',
    description: 'Discover restaurants, hotels and attractions around any location on a map.',
    repo: 'https://github.com/Daksh-Prajapati-49/travel_advisor',
    languages: [['JavaScript', 75.0], ['CSS', 18.9], ['HTML', 6.1]],
  },
  {
    name: 'StayWell',
    file: 'staywell/',
    description: 'A stay and accommodation booking platform.',
    repo: null,
    languages: [['JavaScript', 77.2], ['CSS', 20.8], ['HTML', 1.1]],
  },
];

const langColors = {
  JavaScript: '#f1e05a',
  CSS: '#663399',
  HTML: '#e34c26',
};

const Projects = () => {
  const [ref, visible] = useReveal(0.1);

  return (
    <section className={`section project reveal ${visible ? 'is-visible' : ''}`} id='project' ref={ref}>
      <h2 className='section__title'><span>03.</span>projects</h2>

      <p className='comment project__label'>{'// featured work @ katha'}</p>
      <div className='project__grid project__grid--featured'>
        {featured.map((f) => (
          <article className='proj proj--featured' key={f.name}>
            <div className='proj__top'>
              <span className='proj__badge'>@katha</span>
              <span className='proj__private'>production</span>
            </div>
            <h3 className='proj__name'>{f.name}</h3>
            <p className='proj__desc'>{f.description}</p>
            <ul className='proj__tags'>
              {f.tags.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </article>
        ))}
      </div>

      <p className='comment project__label'>{'// side projects'}</p>
      <div className='project__grid'>
        {projects.map((p) => (
          <article className='proj' key={p.name}>
            <div className='proj__top'>
              <FolderOpenOutlinedIcon className='proj__folder' />
              {p.repo ? (
                <a href={p.repo} target='_blank' rel='noreferrer' aria-label={`${p.name} on GitHub`} className='proj__gh'>
                  <GitHubIcon />
                </a>
              ) : (
                <span className='proj__private'>private</span>
              )}
            </div>
            <p className='proj__path'>~/projects/{p.file}</p>
            <h3 className='proj__name'>{p.name}</h3>
            <p className='proj__desc'>{p.description}</p>

            <div className='proj__langbar'>
              {p.languages.map(([lang, pct]) => (
                <span key={lang} style={{ width: `${pct}%`, background: langColors[lang] }} />
              ))}
            </div>
            <ul className='proj__langs'>
              {p.languages.map(([lang, pct]) => (
                <li key={lang}>
                  <span className='proj__swatch' style={{ background: langColors[lang] }} />
                  {lang} <span>{pct}%</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className='project__more'>
        <a href='https://github.com/Daksh-Prajapati-49?tab=repositories' target='_blank' rel='noreferrer' className='btn btn--ghost'>
          $ ls ~/github --all
        </a>
      </div>
    </section>
  )
}

export default Projects
