import { Container, Table } from "react-bootstrap";

export default function SummaryTable(){
   return (
      <>
         <Container>
            <br />
            <Table striped bordered hover>
               <thead>
                  <tr>
                     <th>Solution</th>
                     <th>Advantages</th>
                     <th>Disadvantages</th>
                     <th>Overall Efficiency</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>Switching to LED Bulbs</td>
                     <td>
                        <ul>
                           <li>Easiest and cost-effective</li>
                           <li>80% energy consumption less than traditional ones</li>
                           <li>Long life span than</li>
                           <li>Low maintenance cost</li>
                           <li>Emit no heat</li>
                           <li>Environmentally friendly</li>
                        </ul>
                     </td>
                     <td>
                        <ul>
                           <li>Higher initial cost of purchasing LED bulbs compared with traditional ones</li>
                           <li>Incompatibility in fixtures (retrofitting and replacement cost)</li>
                        </ul>
                     </td>
                     <td>
                        It can be an easiest and cost-effective way to reduce greenhouse gas emissions. However, the cost saving will not be apparent because Seneca has done a great job on this.
                     </td>
                  </tr>
                  <tr>
                     <td>Utilizing solar panels</td>
                     <td>
                        <ul>
                           <li>Efficient and sustainable</li>
                           <li>Reduce the electricity bill largely</li>
                           <li>Environment benefits</li>
                        </ul>
                     </td>
                     <td>
                        <ul>
                           <li>High initial cost of purchasing and installing</li>
                           <li>Susceptible to weather condition</li>
                           <li>High cost of maintenance and repair</li>
                           <li>Energy storing problems</li>
                        </ul>
                     </td>
                     <td>It is not an ideal way of utilizing solar panel to support the operation of school&#39;s electric system based on the current context.</td>
                  </tr>
                  <tr>
                     <td>Creating a green club and building a website</td>
                     <td>
                        <ul>
                           <li>High efficiency in reducing CO2 emissions</li>
                           <li>Environmentally friendly</li>
                           <li>Shade and energy conservation</li>
                           <li>Biodiversity conservation</li>
                           <li>Community engagement</li>
                           <li>Increasing public awareness of environmental protection</li>
                        </ul>
                     </td>
                     <td>
                        <ul>
                           <li>Long time to thrive</li>
                           <li>Maintenance requirements</li>
                           <li>Land use</li>
                        </ul>
                     </td>
                     <td>
                        Planting trees is a cost-effective and sustainable way to reduce CO2 emissions and combat climate 
                        change despite some challenges. It can and should be an effective way of benefiting current and 
                        future generations in regulating the emissions of CO2. The feasibility of planting trees cannot be 
                        overstated.
                     </td>
                  </tr>
               </tbody>
            </Table>
            <br />
            <br />

         </Container>
      </>
   )
}