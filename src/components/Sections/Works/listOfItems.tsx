import { GithubSvg, GlobeSvg } from "@/ui/icons";
import { H3, Paragraph } from "@/ui/texts";
import styled from "styled-components";

const Card = styled.li`
  position: relative;
  display: grid;
  place-items: center;
  max-width: 20rem;
  border-radius: 5px;
  background-color: var(--white);
  padding: 0.5rem;

  .card_title {
    padding: 0.2rem 0.5rem;
    background-color: var(--black);
    border-radius: 5px;
    margin-bottom: 0.5rem;
  }

  .card_description {
    color: var(--black);
  }
`;

const LinksContent = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1rem;

  .githubSvg,
  .globeSvg {
    cursor: pointer;
    padding: 0.2rem 1rem;
    transition: all 0.2s ease-out;
  }

  .globeSvg:hover,
  .githubSvg:hover {
    background-color: var(--cyan);
    border-radius: 5px;
    stroke: var(--white);
  }
`;

const ListOfItems = ({ items }: { items: { title: string; description: string }[] }) => {
  return (
    <ul className="FlexWrapList" style={{ marginTop: "10rem" }}>
      {items.map((item, index) => (
        <Card key={index}>
          <H3 className="card_title">{item.title}</H3>
          <Paragraph className="card_description">{item.description}</Paragraph>
          <LinksContent>
            <GithubSvg className="githubSvg" />
            <GlobeSvg className="globeSvg" />
          </LinksContent>
        </Card>
      ))}
    </ul>
  );
};

export { ListOfItems };
