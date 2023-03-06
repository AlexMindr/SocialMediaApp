import React from "react";
import { Row, Col, Spin } from "antd";
import Story from "../Story";
import { useSelector } from "react-redux";

const StoryList = ({ setSelectedId }) => {
  const stories = useSelector((state) => state.stories);
  //console.log('stories',stories)
  return !stories.length ? (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        minHeight: "300px",
      }}
    >
      <Spin size="large" />
    </div>
  ) : (
    <Row gutter={[24, 30]}>
      {stories.map((story) => {
        return (
          <Col key={story._id} lg={12} xl={8} xxl={6}>
            <Story story={story} setSelectedId={setSelectedId} />
          </Col>
        );
      })}
    </Row>
  );
};

export default StoryList;
