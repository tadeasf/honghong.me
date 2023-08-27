'use client'

import { MDXComponents } from 'mdx/types'
import { useMDXComponent } from 'next-contentlayer/hooks'

import {
  Alert,
  AlertDescription,
  AlertTitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui'

import Image from './image'
import ItemGrid from './item-grid'
import Link from './link'
import LinkCard from './link-card'
import Logo from './logo'
import Pre from './pre'
import Tree from './tree'
import Video from './video'
import ImageZoom from '../image-zoom'

type MdxProps = {
  code: string
}

const components: MDXComponents = {
  a: Link,
  Image: (props: React.ComponentPropsWithoutRef<typeof Image>) => {
    const { alt, ...rest } = props

    return (
      <>
        <ImageZoom>
          <Image className='rounded-lg' alt={alt} {...rest} />
        </ImageZoom>
        <figcaption className='mt-2 text-center text-sm'>{alt}</figcaption>
      </>
    )
  },
  pre: Pre,
  table: (props: React.ComponentPropsWithoutRef<'table'>) => (
    <Table className='not-prose' {...props} />
  ),
  thead: (props: React.ComponentPropsWithoutRef<'thead'>) => (
    <TableHeader {...props} />
  ),
  tbody: (props: React.ComponentPropsWithoutRef<'tbody'>) => (
    <TableBody {...props} />
  ),
  tr: (props: React.ComponentPropsWithoutRef<'tr'>) => <TableRow {...props} />,
  th: (props: React.ComponentPropsWithoutRef<'th'>) => <TableHead {...props} />,
  td: (props: React.ComponentPropsWithoutRef<'td'>) => <TableCell {...props} />,

  // Custom components
  Alert: (props: React.ComponentPropsWithoutRef<typeof Alert>) => (
    <Alert {...props} />
  ),
  AlertTitle: (props: React.ComponentPropsWithoutRef<typeof AlertTitle>) => (
    <AlertTitle {...props} />
  ),
  AlertDescription: (
    props: React.ComponentPropsWithoutRef<typeof AlertDescription>,
  ) => <AlertDescription {...props} />,
  ItemGrid,
  Tree,
  Video,
  LinkCard,
  Logo,
}

const Mdx = (props: MdxProps) => {
  const { code } = props
  const Component = useMDXComponent(code)

  return (
    <div className='prose prose-invert w-full max-w-none'>
      <Component components={{ ...components }} />
    </div>
  )
}

export default Mdx
