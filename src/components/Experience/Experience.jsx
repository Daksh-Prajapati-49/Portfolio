import React from 'react'
import './Experience.css'
import useReveal from '../utils/useReveal'

const experiences = [
  {
    hash: 'f41c0de',
    branch: 'katha',
    company: 'Katha',
    role: 'Software Engineer',
    period: 'Jul 2025 – Present',
    summary: 'Influencer-marketing marketplace connecting brands with Instagram creators. Owning features end to end across a Rails/MySQL API, two Next.js apps and the ops console.',
    points: [
      'Designed and shipped an agentic campaign-strategy system (OpenAI function calling) that turns a brand\'s website into a costed influencer campaign plan — bounded agent loop, typed tool registry, streamed progress and resumable sessions.',
      'Built the embedding layer for semantic creator search: OpenAI embeddings of profiles and captions indexed in Pinecone, kept fresh by async workers and blended with MySQL filters.',
      'Owned the creator payouts stack — migrated disbursement from Razorpay to Cashfree, built webhook ingestion, reconciliation for stuck payouts, TDS rules and bulk payment tooling.',
      'Built Campaign Builder end to end: guided brief in the portal → LLM-inferred targeting → priced creator list → invites fanned out over WhatsApp and automated voice calls.',
      'Diagnosed production OOM kills on Sidekiq and shipped an RSS watchdog that captures a heap dump before the kill, plus a heap-diff analyzer and runbook.',
      'Shipped white-label multi-tenancy (custom hosts, branded emails and PDF reports) and 20+ internal ops tools.',
    ],
    stack: ['Ruby on Rails', 'MySQL', 'Sidekiq', 'Redis', 'OpenAI', 'Pinecone', 'Next.js', 'TypeScript'],
  },
  {
    hash: 'a3f9c21',
    branch: 'groww',
    logo: '/groww.png',
    company: 'Groww',
    role: 'Software Engineer Intern',
    period: 'Jan 2024 – Jul 2024',
  },
  {
    hash: '7be04d8',
    branch: 'heycoach',
    logo: '/heycoach.png',
    company: 'HeyCoach',
    role: 'Competitive Programming Intern',
    period: 'Nov 2023 – Dec 2023',
  },
];

const Experience = () => {
  const [ref, visible] = useReveal(0.05);

  return (
    <section className={`section exp reveal ${visible ? 'is-visible' : ''}`} id='exp' ref={ref}>
      <h2 className='section__title'><span>02.</span>experience</h2>
      <p className='comment exp__cmd'>$ git log --oneline --career</p>

      <ol className='exp__log'>
        {experiences.map((exp, i) => (
          <li className='exp__item' key={exp.hash}>
            <span className={`exp__node ${i === 0 ? 'exp__node--head' : ''}`} />
            <div className='exp__card'>
              <div className='exp__meta'>
                <span className='exp__hash'>commit {exp.hash}</span>
                <span className='exp__branch'>
                  ({i === 0 ? 'HEAD -> ' : ''}{exp.branch})
                </span>
              </div>
              <div className='exp__body'>
                <div className='exp__logo'>
                  {exp.logo
                    ? <img src={exp.logo} alt={exp.company} />
                    : <span className='exp__wordmark'>{exp.company}</span>}
                </div>
                <div>
                  <h3>{exp.role} <span>@ {exp.company}</span></h3>
                  <p className='exp__date'>{exp.period}</p>
                </div>
              </div>

              {exp.summary && <p className='exp__summary'>{exp.summary}</p>}
              {exp.points && (
                <ul className='exp__points'>
                  {exp.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              )}
              {exp.stack && (
                <div className='exp__stack'>
                  {exp.stack.map((tech) => <span key={tech}>{tech}</span>)}
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Experience
