import { GithubSvg, GlobeSvg } from "@/ui/icons";
import { H3, Paragraph } from "@/ui/texts";
import styled from "styled-components";

const Card = styled.li`
  position: relative;
  display: grid;
  place-items: center;
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

const Root = styled.ul`
  columns: 5 20rem;
  max-width: 85rem;

  li {
    break-inside: avoid;
    margin: 0 auto 1rem;
  }

  @media (min-width: 500px) {
    & {
      margin: 1rem;
    }
  }
`;

const ListOfItems = ({ items }: { items: Work[] }) => {
  return (
    <Root>
      {items.map((item, index) => (
        <Card key={index}>
          <H3 className="card_title">{item.title}</H3>
          {item.description && <Paragraph className="card_description">{item.description}</Paragraph>}
          <LinksContent>
            {item.repository_url && (
              <a href={item.repository_url} target="_blank">
                <GithubSvg className="githubSvg" />
              </a>
            )}
            {item.site_url && (
              <a href={item.site_url} target="_blank">
                <GlobeSvg className="globeSvg" />
              </a>
            )}
          </LinksContent>
        </Card>
      ))}
    </Root>
  );
};

export { ListOfItems };
