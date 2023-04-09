/* eslint-disable @next/next/no-img-element */

import { Container } from "react-bootstrap";
import SummaryTable from '@/src/components/SummaryTable'

export default function Comparative () {
   return (
      <>
         <Container>
            <br />
            <h3>Comparative Analysis</h3>
            
            <p>
               To identify the most optimal solution for advancing Seneca&#39;s sustainable goals, 
               we conducted an analysis that centered on three critical aspects, namely 
               feasibility, effectiveness, and cost. After thoroughly comparing and evaluating 
               our three proposed solutions, we will recommend the most effective option as 
               the final optimal solution to present to Seneca College.
            </p>
            <br />

            <img 
               src='https://www.thelightbulb.co.uk/wp-content/uploads/2017/10/ultimate-guide-led-lights-leds-vs-incandescents-1-1.png' 
               alt='light bulbs'
               className='pic'
            />
            <br />
            <br />
            <strong>Solution 1: Switching to LED Light Bulbs</strong>
            <br />
            <br />
            <p>
               Solution 1 proposes the replacement of traditional incandescent bulbs with 
               energy-efficient LED bulbs at Seneca College to reduce energy consumption 
               and greenhouse gas emissions. This solution is cost-effective and easy to 
               implement, with LED bulbs using up to 90% less energy than traditional bulbs 
               (Energy Saver), resulting in significant cost savings for the institution. 
               Additionally, LED bulbs have a longer lifespan, reducing the frequency of 
               replacements and maintenance costs. They are environmentally friendly and 
               do not emit heat, potentially reducing the need for air conditioning in 
               warmer months. However, several challenges exist with implementing this 
               solution at Seneca College. The initial cost of purchasing and installing 
               LED bulbs may exceed the limited budget of the institution. Additionally, 
               certain fixtures may not be compatible with LED bulbs, requiring additional 
               retrofitting or replacement costs. Lastly, given the extent of LED bulb 
               coverage at Seneca College, it may not be the most effective solution to 
               advance the school&#39;s sustainability goals.
            </p>

            <img 
               src='https://news.energysage.com/wp-content/uploads/2016/06/home-with-solar-panels-1024x659.png' 
               alt='light bulbs'
               className='pic'
            />
            <br />
            <strong>Solution 2: Utilizing Solar Panels</strong>
            <br />
            <br />
            <p>
               The implementation of solar panels presents a sustainable approach to 
               mitigate greenhouse gas emissions at Seneca College. The advantages of 
               using solar panels include the reduction of electric bills and the 
               environmentally friendly nature of the technology. However, the initial costs 
               of purchasing and assembling solar panels are high, and their effectiveness 
               relies on location and the availability of sunlight. The financial burden 
               associated with the installation of solar panels may surpass the allocated 
               budget, which ranges from $50,000 to $5,000,000. Additionally, the harsh 
               winter conditions in the area may limit access to sufficient sunlight, 
               rendering the technology less effective. Furthermore, the installation of 
               solar panels involves multiple departments, including the technical and 
               financial sectors, and requires significant maintenance efforts, necessitating 
               the involvement of excess personnel to ensure proper maintenance and regular 
               checkups to prevent incidents.
            </p>

            <img 
               src='https://www.wikihow.com/images/thumb/7/7f/Make-a-Nature-Club-Step-1.jpg/v4-460px-Make-a-Nature-Club-Step-1.jpg.webp' 
               alt='light bulbs'
               className='pic'
            />
            <br />
            <strong>Solution 3: Creation of Green Club and Website</strong>
            <br />
            <br />
            <p>
               Planting trees is an essential measure for mitigating greenhouse gas emissions
               and combating climate change. The establishment of a green club could significantly
               contribute to Seneca&#39;s pursuit of sustainable goals, particularly in the areas of
               carbon sequestration, reducing carbon dioxide emissions, shade and energy conservation,
               biodiversity conservation, and community engagement. 
            </p>
            <br />
            <ul>
               <li>
                  <b>Carbon Sequestration - </b>
                  Trees are natural carbon sinks that can absorb
                  and store carbon dioxide from the atmosphere through photosynthesis. Based on calculations
                  by the Crowther Lab at ETH Zurich, the Earth&#39;s land could support 4.4 billion hectares
                  of continuous tree cover, which is 1.6 billion hectares more than the current 2.8 
                  billion hectares available. This additional area, of which 0.9 billion hectares meet 
                  the criteria of being unused by humans, could store up to 205 billion tonnes of carbon 
                  dioxide once fully forested, which is equivalent to two-thirds of the carbon dioxide 
                  emitted by human activities since the industrial revolution (ETH ZURICH, 2019). 
               </li>
               <br />
               <li>
                  <b>Reducing Carbon Dioxide Emissions - </b>
                  According to estimates from the Food and Agriculture Organization, planting trees can 
                  help in reducing carbon dioxide emissions as one hectare of forests can absorb the same 
                  quantity of CO2 as that produced by a car driven for 26,000 miles (The Tree Council, 2020).
               </li>
               <br />
               <li>
                  <b>Shade and Energy Conservation - </b>
                  Trees planted around buildings can provide shade, which can reduce energy consumption during
                  hot summer months. According to the U.S. Department of Agriculture, strategically placed 
                  trees around buildings can decrease air conditioning energy consumption by 30% (USDA,2014), 
                  thus contributing to greenhouse gas mitigation at school. 
               </li>
               <br />
               <li>
                  <b>Biodiversity Conservation - </b>
                  Trees also offer a wide range of habitats for plants and animals, contributing to biodiversity 
                  conservation, which plays a crucial role in ecosystem stability and resilience.
               </li>
               <br />
               <li>
                  <b>Community Engagement - </b>
                  Creating a green club can generate social and economic benefits by increasing job opportunities
                  and community engagement while raising awareness and participation in climate actions, 
                  further promoting greenhouse gas mitigation efforts.
               </li>
            </ul>
            <br />

            <p>
               Regardless of the above mentioned advantages, creating the green club requires significant capital 
               involvement in the early stages. The primary stage of the green club would generate several 
               expenses to generate the club. Firstly the material expenses include the purchase of tools 
               and uniforms. Secondly, the non-material expenses, including the recruitment of biomedical 
               experts and the advertising expenses, attract more volunteers to join the club. Lastly, 
               The website also requires high maintenance for updates in information and regular checkups 
               to avoid bugs. 
            </p>

            <SummaryTable />
         </Container>
      </>
   )
}