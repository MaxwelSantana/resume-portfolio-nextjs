import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardHeader,
  Col,
} from "reactstrap";
import Image from "next/image";

import Fade from "./Fade";

function ExperienceCard({ data }) {
  return (
    <Col lg="4">
        <Card
          style={{ flex: 1 }}
          className="shadow-lg--hover shadow border-0 text-center rounded"
        >
          <CardHeader style={{ background: data.companylogoPredominantColor }}>
            <h5 className="text-white">{data.company}</h5>
          </CardHeader>
          <CardBody className="py-5">
            <div
              className="bg-white rounded-circle mb-3 img-center img-fluid shadow-lg "
              style={{ width: "100px", height: "100px" }}
            >
              <Image
                src={data.companylogo}
                width={"100px"}
                height={"100px"}
                alt={data.companylogo}
              />
            </div>
            <CardTitle tag="h5">{data.role}</CardTitle>
            <CardSubtitle>{data.date}</CardSubtitle>
            <CardText className="description my-3 text-left">
              {data.desc}
              <ul>
                {data.descBullets
                  ? data.descBullets.map((desc) => {
                      return <li key={desc}>{desc}</li>;
                    })
                  : null}
              </ul>
            </CardText>
          </CardBody>
        </Card>
    </Col>
  );
}

export default ExperienceCard;
