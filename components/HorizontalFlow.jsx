import React, { useCallback } from "react";
import ReactFlow, { useNodesState, useEdgesState, addEdge } from "reactflow";
import "reactflow/dist/style.css";
import data from "../data";


const eventCount = {
  views: data.filter(stud => stud.views),
  tandc: data.filter(stud => stud.tandc),
  bookmarked: data.filter(stud => stud.bookmarked),
  peerReview:data.filter(stud => stud.peerReview),
  dloadEbook:data.filter(stud => stud.dloadEbook),
  applied:data.filter(stud => stud.applied),
  docsUpload:data.filter(stud => stud.docsUpload),
  sponsorVisit:data.filter(stud => stud.sponsorVisit),
  followupEnquiry:data.filter(stud => stud.followupEnquiry),
  followupEmail:data.filter(stud => stud.followupEmail),
  reuploadDocs:data.filter(stud => stud.reuploadDocs)
}


for(let stud in data){

}

const initialNodes = [
  {
    id: 'horizontal-1',
    sourcePosition: "right",
    type: "input",
    data: { label: `View (${eventCount.views.length})` },
    position: { x: 0, y: 150 },
    studs: eventCount.views
  },
  {
    id: 'horizontal-2',
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: `Terms and Conditions enquiry (${eventCount.tandc.length})` },
    position: { x: 250, y: 0 },
    studs: eventCount.tandc
  },
  {
    id: 'horizontal-3',
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: `Bookmarked (${eventCount.bookmarked.length})` },
    position: { x: 250, y: 150 },
    studs: eventCount.bookmarked
  },
  {
    id: 'horizontal-4',
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: `Peer review (${eventCount.peerReview.length})` },
    position: { x: 250, y: 350 },
    studs: eventCount.peerReview
  },
  {
    id: 'horizontal-5',
    sourcePosition: "top",
    targetPosition: "bottom",
    data: { label: `Download rulebook (${eventCount.dloadEbook.length})` },
    position: { x: 400, y: 300 },
    studs: eventCount.dloadEbook
  },
  {
    id: 'horizontal-6',
    sourcePosition: "bottom",
    targetPosition: "top",
    data: { label: `Applied (${eventCount.applied.length})` },
    position: { x: 500, y: 150 },
    studs: eventCount.applied
  },
  {
    id: 'horizontal-7',
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: `Upload Documents (${eventCount.docsUpload.length})` },
    position: { x: 750, y: 150 },
    studs: eventCount.docsUpload
  },
  {
    id: 'horizontal-8',
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: `Follow up email (${eventCount.followupEmail.length})` },
    position: { x: 1000, y: 250 },
    studs: eventCount.followupEmail
  },
  {
    id: 'horizontal-9',
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: `Reupload documents (${eventCount.reuploadDocs.length})` },
    position: { x: 1000, y: 100 },
    studs: eventCount.reuploadDocs
  },
  {
    id: 'horizontal-10',
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: `Visited Sponsor website (${eventCount.sponsorVisit.length})` },
    position: { x: 900, y: -80 },
    studs: eventCount.sponsorVisit
  },
  {
    id: 'horizontal-11',
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: `Follow-up enquiry (${eventCount.followupEnquiry.length})` },
    position: { x: 900, y: 0 },
    studs: eventCount.followupEnquiry
  }
];

const initialEdges = [
  {
    id: "horizontal-e1-2",
    source: 'horizontal-1',
    type: "smoothstep",
    target: 'horizontal-2',
    animated: true,
  },
  {
    id: "horizontal-e1-3",
    source: 'horizontal-1',
    type: "smoothstep",
    target: 'horizontal-3',
    animated: true,
  },
  {
    id: "horizontal-e1-4",
    source: 'horizontal-1',
    type: "smoothstep",
    target: 'horizontal-4',
    animated: true,
  },
  {
    id: "horizontal-e2-10",
    source: 'horizontal-2',
    type: "smoothstep",
    target: 'horizontal-10',
    animated: true,
  },
  {
    id: "horizontal-e2-11",
    source: 'horizontal-2',
    type: "smoothstep",
    target: 'horizontal-11',
    animated: true,
  },
  {
    id: "horizontal-e2-6",
    source: 'horizontal-2',
    type: "smoothstep",
    target: 'horizontal-6',
    animated: true,
  },
  {
    id: "horizontal-e3-6",
    source: 'horizontal-3',
    type: "smoothstep",
    target: 'horizontal-6',
    animated: true,
  },
  {
    id: "horizontal-e4-5",
    source: 'horizontal-4',
    type: "smoothstep",
    target: 'horizontal-5',
    animated: true,
  },
  {
    id: "horizontal-e5-6",
    source: 'horizontal-5',
    type: "smoothstep",
    target: 'horizontal-6',
    animated: true,
  },
  {
    id: "horizontal-e6-7",
    source: 'horizontal-6',
    type: "smoothstep",
    target: 'horizontal-7',
    animated: true,
  },
  {
    id: "horizontal-e7-8",
    source: 'horizontal-7',
    type: "smoothstep",
    target: 'horizontal-8',
    animated: true,
  },
  {
    id: "horizontal-e7-9",
    source: 'horizontal-7',
    type: "smoothstep",
    target: 'horizontal-9',
    animated: true,

  }
];

// const onNodeClick = (event, node) => console.log('click node', node);

const HorizontalFlow = (props) => {
  const [nodes, _, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((els) => addEdge(params, els)),
    []
  );

  return (
    <div style={{height:400}}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        attributionPosition="bottom-left"
        onNodeClick = {(event, node) => props.onClick(node.studs)}
      />

    </div>
  );
};

export default HorizontalFlow;
