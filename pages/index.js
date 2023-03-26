import React, { useState, useCallback } from 'react'
import ReactFlow, { useNodesState, useEdgesState, addEdge } from 'reactflow';
import 'reactflow/dist/style.css';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Tabs, Stack, TabList, Card, CardHeader,Text, ButtonGroup,  CardBody, CardFooter, TabPanels, Tab, TabPanel, Heading, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, } from '@chakra-ui/react'
import data from '../data.js'
import HorizontalFlow from '../components/HorizontalFlow.jsx';
import { IconButton } from '@chakra-ui/react'
import {FaWhatsapp} from 'react-icons/fa'
import {IoNotificationsOutline, IoMailOutline} from 'react-icons/io5'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [node, setNode] = useState([]);
  
  const students = data.map(studs => {
    return (
      <Tr key={studs.id}>
        <Td>{studs.name}</Td>
        <Td>{studs.email}</Td>
        <Td>{studs.phone}</Td>
      </Tr>
    )
  });

  const nodeTable = node.map(studs => {
    return (<Tr key={studs.id}>
      <Td>{studs.name}</Td>
      <Td>{studs.email}</Td>
      <Td>{studs.phone}</Td>
      <Td>
        <ButtonGroup>
          <a href={`https://wa.me/${studs.phone}`}><IconButton icon={<FaWhatsapp/>}/></a>
          <a href={`mailto:${studs.email}`}><IconButton icon={<IoMailOutline/>}/></a>
          <a href={`#`}><IconButton icon={<IoNotificationsOutline/>}/></a>
        </ButtonGroup>
      </Td>
    </Tr>)
  })

  return (
    <>
      <Head>
        <title>Scholify</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <Heading textAlign={"center"} marginTop={"5"}>Scholify</Heading>
        <Tabs margin={'4'} isFitted variant='enclosed' defaultIndex={1}>
          <TabList>
            <Tab>Dashboard</Tab>
            <Tab>Analyse</Tab>
            <Tab>Applicants</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Card margin={'2.5'}>
                <CardHeader >
                  <Heading size={'sm'} fontWeight={'bold'} fontFamily={'monospace'}>Action Required</Heading>
                </CardHeader>
                <CardBody>
                  <Text size={'md'}>7 candidates are waiting for their application to be reviewed.</Text>
                </CardBody>
              </Card>

              <Card margin={'2.5'}>
                <CardHeader>
                  <Heading size={'sm'} fontWeight={'bold'} fontFamily={'monospace'}>Top 5 Applicants</Heading>
                </CardHeader>
                <CardBody>
                  <TableContainer>
                    <Table variant='simple'>
                      <Thead>
                        <Tr>
                          <Th>Name</Th>
                          <Th>Email</Th>
                          <Th>Contact</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {students.slice(0,5)}
                      </Tbody>
                    </Table>
                  </TableContainer>
                </CardBody>
              </Card>
              
            </TabPanel>

            <TabPanel >
              <Card margin={'2.5'}>
                <HorizontalFlow onClick={setNode} />
              </Card>

              <Card margin={'2.5'}>
                <CardHeader>
                  <Heading size={'sm'} fontWeight={'bold'} fontFamily={'monospace'}>Users</Heading>
                </CardHeader>
                
                <CardBody>
                <TableContainer>
                  <Table variant={'simple'}>
                    <Thead>
                      <Tr>
                        <Th>Name</Th>
                        <Th>Email</Th>
                        <Th>Contact</Th>
                        <Th>Notify</Th>
                      </Tr>
                    </Thead>
                <Tbody>
                {nodeTable}
                </Tbody>
                  </Table>
                </TableContainer>

                </CardBody>
              </Card>
              
            </TabPanel>

            <TabPanel> {/* third*/}
            <Card margin={'2.5'}>
              <CardHeader>
                <Heading size={'sm'} fontWeight={'bold'} fontFamily={'monospace'}>Total Applicants</Heading>
              </CardHeader>
              <CardBody>
                <TableContainer>
                  <Table variant='simple'>
                    <Thead>
                      <Tr>
                        <Th>Name</Th>
                        <Th>Email</Th>
                        <Th>Contact</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {students}
                    </Tbody>
                  </Table>
                </TableContainer>
              </CardBody>
            </Card>
              
            </TabPanel>
          </TabPanels>
        </Tabs>
      </main>
    </>
  )
}
