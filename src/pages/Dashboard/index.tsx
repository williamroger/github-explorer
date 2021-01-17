import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './style';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input placeholder="Digite aqui o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img src="https://avatars1.githubusercontent.com/u/3818294?s=460&u=0f10041b7d86718bc8a4a79bf178b34d1d75ccd4&v=4" alt="William Roger"/>
          <div>
            <strong>williamroger/mybooks-application</strong>
            <p>Back-end desenvolvido em PHP com micro-framework Slim.</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img src="https://avatars1.githubusercontent.com/u/3818294?s=460&u=0f10041b7d86718bc8a4a79bf178b34d1d75ccd4&v=4" alt="William Roger" />
          <div>
            <strong>williamroger/mybooks-application</strong>
            <p>Back-end desenvolvido em PHP com micro-framework Slim.</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img src="https://avatars1.githubusercontent.com/u/3818294?s=460&u=0f10041b7d86718bc8a4a79bf178b34d1d75ccd4&v=4" alt="William Roger" />
          <div>
            <strong>williamroger/mybooks-application</strong>
            <p>Back-end desenvolvido em PHP com micro-framework Slim.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
}

export default Dashboard;