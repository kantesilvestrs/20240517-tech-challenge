import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { useEffect, useMemo, useState } from "react";

interface ChartDataItem {
  name: string;
  total: number;
}

interface Product {
  category: string;
}

const Chart = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  const chartData = useMemo<ChartDataItem[]>(() => {
    const categoryMap = products.reduce<Record<string, number>>((acc, item) => {
      // Only work with categories returned from the API
      if (categories.includes(item.category)) {
        if (item.category in acc) {
          acc[item.category] += 1;
        } else {
          acc[item.category] = 1;
        }
      }
      
      return acc;
    }, {});

    return Object.entries(categoryMap).map(([key, item]) => ({
      name: key,
      total: item
    }))
  }, [categories, products])

  useEffect(() => {

    (async () => {
      try {
        const categoriesResponse = await fetch('https://dummyjson.com/products/categories');
        const categoriesResult = await categoriesResponse.json();
        setCategories(categoriesResult)
  
        const productsResponse = await fetch('https://dummyjson.com/products');
        const productsResult = await productsResponse.json();
        setProducts(productsResult.products);
      } catch (ex) {
        console.log('There was an issue fetching categories and products', ex)
      }
    })()

  }, [])

  return (
    <div className="flex min-h-screen w-full flex-col">
      <ResponsiveContainer width="100%" height={350}>
      <BarChart data={chartData}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar
          dataKey="total"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
    </div>
  )
}

export default Chart;