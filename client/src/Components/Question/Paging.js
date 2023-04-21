import Pagination from 'react-js-pagination';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PageWrapper = styled.div`
  .pagination {
    display: flex;
    justify-content: center;

    li {
      display: block;
      margin: 0 5px;
      width: 1.4rem;
      height: 1.4rem;
      justify-content: center;
      align-items: center;

      &.page-item {
        &.active {
          color: #f28225;
        }
      }

      button {
        width: 32px;
        height: 32px;
        border: none;
        background-color: transparent;
        border-radius: 3px;
        font-size: 14px;
        color: #333;

        &:hover {
          background-color: #f5f5f5;
        }

        &.disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      }
    }
  }
`;

const Paging = ({ page, count, setPage }) => {
  return (
    <PageWrapper>
      <Pagination
        activePage={page} // 현재 페이지
        itemsCountPerPage={10} // 한 페이지에 보여줄 아이템 개수
        totalItemsCount={count} // 전체 아이템 개수
        pageRangeDisplayed={10} // 페이지 범위
        onChange={setPage} // 클릭 시 페이지를 변경할 때 실행할 함수
        itemClass="page-item"
        linkClass="page-link"
        firstPageText=""
        lastPageText=""
      />
    </PageWrapper>
  );
};

Paging.propTypes = {
  page: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default Paging;
