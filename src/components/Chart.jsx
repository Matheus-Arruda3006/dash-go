import ApexChart from 'react-apexcharts'

export default function Chart () {
    
    const options = {

        xaxis: {
            type: 'area'
        },
        yaxis: {
            tooltip: {
                enabled: true,
            }
        }

    }
    
    const series = [
        {name: 'series1', 
        data: [31, 120, 10, 28, 51, 18, 109]}
    ];


    return (
        <ApexChart options={options} series={series} type='area' height={160}/>

        
    );
}