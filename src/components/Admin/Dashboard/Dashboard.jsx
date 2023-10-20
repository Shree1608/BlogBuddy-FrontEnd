import React from 'react';
import Sidebar from '../Sidebar'
import { Box, Grid, HStack, Heading, Stack, Text, Card, CardHeader, Progress} from '@chakra-ui/react'
import { DoughnutChart, LineChart } from './Chart';
// import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri';


export const Bars = ({title , value })=>{
  return(
      <Box py={'4'} px={['0' , '20']} >
         <Heading size={'sm'} children={title} mb={'2'} />
         <HStack w={'full'} alignItems={'center'}>
          <Text children='0%' />
          <Progress w={'full'} value={value} colorScheme='cyan'/>
          <Text children={`${value > 100 ? value :100}%`} />
         </HStack>
      </Box>
  )
}
const Dashboard= () => {
  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
      <Box boxSizing='border-box' py={16} px={['4', '0']} m={['2','0']}>
        <Text textAlign={'center'} opacity={0.5}
          children={`Last Change Was on ${String(new Date()).split('G')[0]}`}
        ></Text>
        <Heading children={'Dashboard'} ml={['0', '16']} mb={16} textAlign={['center', 'left']}
        />
        <Stack direction={['column', 'row']}
          minH={24} 
          justifyContent={['center','space-evenly']}>
            
            <Card boxShadow={'-2px 0 10px rgba(107 ,70,193,0.5)'} h={36} w={56}>
              <CardHeader>
                <Heading size='md'> Views</Heading>
              </CardHeader>
              <HStack marginLeft={5}>
                <Text>Total</Text>
                <Text>In percentage</Text>
              </HStack>
                <Text marginLeft={5} marginTop={3} opacity={0.6} children ={"Since Last Month"}/>
            </Card>
            <Card boxShadow={'-2px 0 10px rgba(107 ,70,193,0.5)'} h={36} w={56}>
              <CardHeader>
                <Heading size='md'> Views</Heading>
              </CardHeader>
              <HStack marginLeft={5}>
                <Text>Total</Text>
                <Text>In percentage</Text>
              </HStack>
                <Text marginLeft={5} marginTop={3} opacity={0.6} children ={"Since Last Month"}/>
            </Card>
            <Card boxShadow={'-2px 0 10px rgba(107 ,70,193,0.5)'} h={36} w={56}>
              <CardHeader>
                <Heading size='md'> Views</Heading>
              </CardHeader>
              <HStack marginLeft={5}>
                <Text>Total</Text>
                <Text>In percentage</Text>
              </HStack>
                <Text marginLeft={5} marginTop={3} opacity={0.6} children ={"Since Last Month"}/>
            </Card>
        </Stack>

        <Box 
          m={['0' , '10']}
          borderRadius={'lg'}
          mt={['4','16']}
          boxShadow={'-2px 0 10px rgba(107 ,70,193,0.5)'}
        > 
       <Heading textAlign={['center' , 'left']} size={'md'} children ="Views Graph" pt={['8' ,'8']}   />
        <LineChart />
        </Box>
        {/* Line graph */}
        
          <Grid templateColumns={['1fr' , '2fr 1fr']}>
            <Box p={['0','4']} flex={['1','2']}>
              <Heading textAlign={['center' ,'left']} 
              size={'md'}
              children={"Progres Bar"}
              my={['4','8']}
              ml={['0' , '16']}
              />
              <Box  >
               <Bars title={'view'} value={20}/>
               <Bars title={'view'} value={40}/>
               <Bars title={'view'} value={87}/>
              </Box>
            </Box>
            <Box p={['0','12']} boxSizing='border-box'>
              <Heading textAlign={'center'} size={'md'} mb={'4'} children="Users"/>
              <DoughnutChart/>
            </Box>
          </Grid>
      </Box>
      <Sidebar />

    </Grid>
  )
}

export default Dashboard

