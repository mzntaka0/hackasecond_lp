import React from 'react'
import {
  Heading
} from '@chakra-ui/react'


const ObjectComponent: React.FC = () => {
  return (
    <div>
      Takao Mizuno <br />
      Jan 10th, 1994 <br />
      Computer Lover / Book Lover <br />

      <Heading size='lg'>
        lang
      </Heading>
      <ul>
        <li>Python</li>
        <li>TypeScript</li>
      </ul>

      <Heading size='lg'>
        tool
      </Heading>
      <ul>
        <li>PyTorch</li>
        <li>NumPy</li>
        <li>Pandas</li>
        <li>FastAPI</li>
        <li>Django</li>
        <li>Django REST Framework</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Redux</li>
        <li>Recoil</li>
        <li>Ant Design</li>
        <li>Chakra-UI</li>
        <li>Docker</li>
        <li>Linux</li>
        <li>AWS CDK</li>
      </ul>

      <Heading size='lg'>
        skill
      </Heading>
      <ul>
        <li>Machine Learning</li>
        <li>Audio Processing</li>
        <li>Image Processing</li>
        <li>Natural Language Processing</li>
        <li>Frontend(SPA, SSR, SSG)</li>
        <li>Backend(API)</li>
        <li>Infra(AWS)</li>
      </ul>
    </div>
  )
}


export default ObjectComponent
