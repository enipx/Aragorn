"use client";

import { amazonData, netflixData, playstationData, serviceColorData, youtubeData } from '@/lib/data';
import { BarChart } from '@tremor/react';
import { useStateProviderContext } from '../provider/state';

const services = {
  youtube: {
    label: 'Youtube',
    color: serviceColorData.youtube,
    index: "date",
    indexLabel: "Videos watched",
    data: youtubeData,
  },
  amazon: {
    label: 'Amazon',
    color: serviceColorData.amazon,
    index: "date",
    indexLabel: "Products bought",
    data: amazonData,
  },
  playstation: {
    label: 'PlayStation',
    color: serviceColorData.playstation,
    index: "date",
    indexLabel: "Game played",
    data: playstationData,
  },
  netflix: {
    label: 'Netflix',
    color: serviceColorData.netflix,
    index: "date",
    indexLabel: "Movies watched",
    data: netflixData,
  }
}

export const Chart = () => {
  const { config } = useStateProviderContext() || {};

  const selectedService = config?.service;

  const service = services[selectedService as keyof typeof services || "youtube"];

  return (
    <div className="position flex-1 flex flex-col justify-end">
      <BarChart
        data={service.data}
        index={service.index}
        categories={
          [service.label.toLowerCase()]
        }
        colors={ [service.color]}
        showXAxis={false}
        showYAxis={false}
        valueFormatter={(value) => `${value} ${service.indexLabel}`}
        className="mt-6 h-full md:max-w-2xl md:mx-auto"
        tickGap={100}
        yAxisWidth={100}
        showAnimation
      />
    </div>
  )
}
