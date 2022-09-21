import { useCommonStyle } from "../../../../styles";
import useStyles from "./styles";

const Foreword = (props: any) => {
  const styles = useStyles();
  const commonStyles = useCommonStyle();

  const { inputSearch, onSearching, handleSearch } = props;

  const onKeyUp = (e: any) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={styles.foreword}>
      <div className={commonStyles.section}>
        <div className={styles.forewordContainer}>
          <div className={styles.forewordLeft}>
            <img src="/images/foreword-text.svg" className="foreword" alt="" />
            <img
              src="/images/foreword-text-mobile.svg"
              className="foreword-mobile"
              alt=""
            />
            <div className={styles.searchBar}>
              <div className="search-field">
                <img src="/images/icon-search.svg" alt="" />
                <input
                  type="text"
                  placeholder="Search job ..."
                  onKeyUp={onKeyUp}
                  value={inputSearch}
                  onChange={onSearching}
                  autoFocus
                />
              </div>
              <span className="search-btn" onClick={handleSearch}>
                Search
              </span>
            </div>
          </div>
          <div className={styles.forewordRight}>
            <img src="/images/foreword.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foreword;
