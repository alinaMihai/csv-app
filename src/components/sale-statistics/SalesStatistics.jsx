import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis } from 'victory';
import './sale-statistics.css';
const countSalesByRegion = (sales) => {
    return sales.reduce((acc, sale) => {
        if (!acc[sale['Region']]) {
            acc[sale['Region']] = 1;
        } else {
            acc[sale['Region']]++;
        }
        return acc;
    }, {});
};

const getSalesByRegionPercentage = (regionAmount, total) => {
    return total <= 0 ? 0 : (regionAmount * 100) / total;
};

const getChartData = (data) => {
    const salesCountByRegion = countSalesByRegion(data);
    return Object.keys(salesCountByRegion).map((entry) => {
        return {
            x: entry,
            y: getSalesByRegionPercentage(
                salesCountByRegion[entry],
                data.length
            ),
            label: entry,
        };
    });
};

export default function SaleStatistics({
    data,
    title = 'Number of Sales(%) by Region',
}) {
    if (!data.length) {
        return null;
    }
    return (
        <>
            <h2 className="salesStatistics__title">{title}</h2>
            <div className='salesStatistics__container'>
                <VictoryChart
                    style={{ parent: { maxWidth: '100%' } }}
                    domainPadding={{ x: 30, y: 30 }}
                    theme={VictoryTheme.material}
                    padding={{ top: 10, bottom: 40, right: 100, left: 40 }}
                >
                    <VictoryBar
                        horizontal
                        data={getChartData(data)}
                        style={{
                            data: { fill: 'tomato', width: 20 },
                        }}
                    />
                    <VictoryAxis dependentAxis />
                </VictoryChart>
            </div>
        </>
    );
}
