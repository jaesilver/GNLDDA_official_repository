import React from 'react'
import Graph from 'react-vis-network-graph'
export default function GraphView() {
    const graph = {
        nodes: [
            {id:1, label:"Node 1", title: "node to 1 tooltip text", shape: "circle"},
            {id:2, label:"Node 2"},
            {id:3, label:"Node 3"},
            {id:4, label:"Node 4"},
            {id:5, label:"Node 5"},
            {id:6, label:"Node 6"},
            {id:7, label:"Node 7"},
            {id:8, label:"Node 8"},
            {id:9, label:"Node 9"},
            {id:10, label:"Node 10"}
        ],
        edges: [
            {from: 1, to: 1, smooth: {type:"curvedCW"}, arrows: {from: {enabled: true, type: "circle"}, to: {enabled: true, type: "circle"}}},
            {from: 1, to: 7},
            {from: 2, to: 1},
            {from: 1, to: 3},
            {from: 5, to: 4},
            {from: 3, to: 7},
            {from: 2, to: 1},
            {from: 3, to: 7},
            {from: 4, to: 1},
            {from: 2, to: 7},
            {from: 2, to: 1},
            {from: 2, to: 7}
        ]
    }

    const option = {
        interaction: {
            navigationButtons: true
        },
        nodes: {
            borderWidth: 2,
            size: 40,
            color: {
                border: "#22222",
                background: "#666666"
            }
        },
        edges: {
            color: "yellow"
        },
        shadow:true,
        smooth: true,
        height: "900px"
    }
    return (
        <div className='container'>
            <Graph 
                graph={graph}
                options={option}
            />
        </div>
    )
}