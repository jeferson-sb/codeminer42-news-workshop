import Head from 'next/head'

import { MainGrid } from '@/ui/mainGrid/MainGrid'

export const news = {
  todayHighlight: {
    id: '9cj6epj3ry',
    title: 'Revolutionary Quantum Encryption Technique Unveiled',
    slug: 'revolutionary-quantum-encryption-technique-unveiled',
    abstract:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore harum voluptate impedit quos placeat officia illum perspiciatis nobis. Soluta omnis sit architecto beatae odio veniam cumque eum, sed doloribus voluptate quo esse laboriosam incidunt nostrum? Placeat natus eum tempore! Consectetur?',
    category: 'World',
    poster: {
      src: 'https://picsum.photos/500/300',
      alt: '',
    },
    author: {
      name: 'Audie Remington',
      avatar: {
        src: 'https://i.pravatar.cc/48',
      },
    },
  },
  secondaries: [
    {
      id: '2c6tlas4m1',
      title: 'Amazon Rainforest Sees Record Reforestation Efforts',
      slug: 'amazon-rainforest-sees-record-reforestation-efforts',
      poster: {
        src: 'https://picsum.photos/120/120',
        alt: '',
      },
      category: 'BR',
      abstract:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quidem eius ut officia at eveniet quia neque magnam voluptate sed repellendus voluptas voluptatem quibusdam, repellat sit rerum? Dignissimos, eaque animi!',
      author: {
        name: 'Kaison Wyatt',
        avatar: {
          src: 'https://i.pravatar.cc/48',
          alt: 'Kaison Wyatt',
        },
      },
    },
    {
      id: '25n3tz7bdv',
      title: 'Silicon Valley Startup Launches AI-Powered Tutoring Service',
      slug: 'silicon-valley-startup-launches-ai-powered-tutoring-service',
      poster: {
        src: 'https://picsum.photos/120/120',
        alt: '',
      },
      category: 'US',
      abstract:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quidem eius ut officia at eveniet quia neque magnam voluptate sed repellendus voluptas voluptatem quibusdam, repellat sit rerum? Dignissimos, eaque animi!',
      author: {
        name: 'Hector Gregg',
        avatar: {
          src: 'https://i.pravatar.cc/48',
          alt: 'Hector Gregg',
        },
      },
    },
    {
      id: '47mjd73im6',
      title: 'Shanghai to Host the World’s First Skyline Marathon',
      slug: 'shanghai-to-host-the-worlds-first-skyline-marathon',
      poster: {
        src: 'https://picsum.photos/120/120',
        alt: '',
      },
      category: 'CN',
      abstract:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quidem eius ut officia at eveniet quia neque magnam voluptate sed repellendus voluptas voluptatem quibusdam, repellat sit rerum? Dignissimos, eaque animi!',
      author: {
        name: 'Leanna Jools',
        avatar: {
          src: 'https://i.pravatar.cc/48',
          alt: 'Leanna Jools',
        },
      },
    },
  ],
  opinions: [
    {
      id: '2aogm2askx',
      title:
        'The Paradox of Progress: How AI’s Leap Forward Could Mean a Step Back for Human Creativity',
      slug: 'the-paradox-of-progress-how-ais-leap-forward-could-mean-a-step-back-for-human-creativity',
      poster: {
        src: '',
        alt: '',
      },
      category: 'AI',
      abstract: '',
      author: {
        name: 'Lindsay Star',
        avatar: {
          src: 'https://i.pravatar.cc/48?img=47',
          alt: 'Lindsay Star',
        },
      },
    },
    {
      id: 'b1l9gn85',
      title:
        'Beyond the Hype: A Realist’s View on the Sustainable Future of Blockchain Technologies',
      slug: 'beyond-the-hype-a-realists-view-on-the-sustainable-future-of-blockchain-technologies',
      poster: {
        src: '',
        alt: '',
      },
      category: 'Blockchain',
      abstract: '',
      author: {
        name: 'Shana Nuan',
        avatar: {
          src: 'https://i.pravatar.cc/48?img=38',
          alt: 'Shana Nuan',
        },
      },
    },
  ],
  categorized: {
    sports: [
      {
        id: 'vy3xrc9e1',
        title: 'UCL to be decided this Saturday in London',
        slug: 'ucl-to-be-decided-this-saturday-in-london',
        poster: {
          src: 'https://picsum.photos/500/300',
          alt: '',
        },
        abstract:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore harum voluptate impedit quos placeat officia illum perspiciatis nobis. Soluta omnis sit architecto beatae odio veniam cumque eum, sed doloribus...',
        author: {
          name: 'Davis Abel',
          avatar: {
            src: 'https://i.pravatar.cc/48',
            alt: 'Davis Abel',
          },
        },
      },
      {
        id: 'vy3xrc9e1',
        title: 'Man United won Premier Cup',
        slug: 'man-united-won-premier-cup',
        poster: {
          src: 'https://picsum.photos/500/300',
          alt: '',
        },
        abstract:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore harum voluptate impedit quos placeat officia illum perspiciatis nobis. Soluta omnis sit architecto beatae odio veniam cumque eum, sed doloribus...',
        author: {
          name: 'Davis Abel',
          avatar: {
            src: 'https://i.pravatar.cc/48',
            alt: 'Davis Abel',
          },
        },
      },
      {
        id: '4mpdiyk0',
        title:
          'First Player to Dunk from the Free-Throw Line in an NBA Finals Game',
        slug: 'first-player-to-dunk-from-the-free-throw-line-in-an-nba-finals-game',
        poster: {
          src: 'https://picsum.photos/500/300',
          alt: '',
        },
        abstract:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore harum voluptate impedit quos placeat officia illum perspiciatis nobis. Soluta omnis sit architecto beatae odio veniam cumque eum, sed doloribus voluptate quo esse laboriosam incidunt nostrum? Placeat natus eum tempore! Consectetur?',
        author: {
          name: 'Charles Gareth',
          avatar: {
            src: 'https://i.pravatar.cc/48',
            alt: 'Charles Gareth',
          },
        },
      },
      {
        id: '350n056v',
        title:
          'Speed and Strategy: Youngest Champion in F1 History Wins Great Title',
        slug: 'speed-and-strategy-youngest-champion-in-f1-history-wins-great-title',
        poster: {
          src: 'https://picsum.photos/500/300',
          alt: '',
        },
        abstract:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore harum voluptate impedit quos placeat officia illum perspiciatis nobis. Soluta omnis sit architecto beatae odio veniam cumque eum, sed doloribus voluptate quo esse laboriosam incidunt nostrum? Placeat natus eum tempore! Consectetur?',
        author: {
          name: 'Gaspard Trent',
          avatar: {
            src: 'https://i.pravatar.cc/48',
            alt: 'Gaspard Trent',
          },
        },
      },
    ],
    politics: [
      {
        id: '7upx581e9b',
        title:
          'Democrats grapple with the right way to talk about Biden’s immigration policies',
        slug: 'democrats-grapple-with-the-right-way-to-talk-about-bidens-immigration-policies',
        poster: {
          src: 'https://picsum.photos/500/300',
          alt: '',
        },
        abstract:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore harum voluptate impedit quos placeat...',
        author: {
          name: 'Josslyn Danielle',
          avatar: {
            src: 'https://i.pravatar.cc/48',
            alt: 'Josslyn Danielle',
          },
        },
      },
      {
        id: '17ccccu0j1',
        title:
          'Government Launches Nationwide Initiative to Become a Global Leader in Renewable Energy Technology',
        slug: 'government-launches-nationwide-initiative-to-become-a-global-leader-in-renewable-energy-technology',
        poster: {
          src: 'https://picsum.photos/500/300',
          alt: '',
        },
        abstract:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore harum voluptate impedit quos placeat officia illum perspiciatis nobis. Soluta omnis sit architecto beatae odio veniam cumque eum, sed doloribus voluptate quo esse laboriosam incidunt nostrum? Placeat natus eum tempore! Consectetur?',
        author: {
          name: 'Indiana Priscilla',
          avatar: {
            src: 'https://i.pravatar.cc/48',
            alt: 'Indiana Priscilla',
          },
        },
      },
      {
        id: 'avzjv1ar',
        title:
          'Japan Announces Breakthrough Policy: Nationwide Initiative to Transform Urban Centers',
        slug: 'japan-announces-breakthrough-policy-nationwide-initiative-to-transform-urban-centers',
        poster: {
          src: 'https://picsum.photos/500/300',
          alt: '',
        },
        abstract:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore harum voluptate impedit quos placeat officia illum perspiciatis nobis. Soluta omnis sit architecto beatae odio veniam cumque eum, sed doloribus voluptate quo esse laboriosam incidunt nostrum? Placeat natus eum tempore! Consectetur?',
        author: {
          name: 'Indiana Priscilla',
          avatar: {
            src: 'https://i.pravatar.cc/48',
            alt: 'Indiana Priscilla',
          },
        },
      },
    ],
  },
}

export default function Home() {
  return (
    <>
      <Head>
        <title>The Codeminer42</title>
        <meta
          name="description"
          content="The Codeminer - News about everything related to Software Engineering and its surroundings"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <MainGrid stories={news} />
    </>
  )
}

// TODO: Exercise 1
