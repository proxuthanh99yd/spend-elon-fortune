// import React from 'react'
import PropTypes from "prop-types";

function Total({ cash, spent }) {
    return (
        <div className="total">
            <p className="totalMoney" id="totalMoney" />
            <p className="totalMoney">
                Remaining:{" "}
                {cash.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")} USD
            </p>
            <p />
            <p className="percentageLeft" id="percentageLeft" />
            <p className="percentageLeft">
                {spent === 217000000000
                    ? "You haven't spent a single dollar! start buying! "
                    : `You only spent ${(
                          100 -
                          (spent * 100) / 217000000000
                      ).toFixed(6)}
                % of the total!`}
            </p>
            <p />
        </div>
    );
}

Total.propTypes = { cash: PropTypes.number, spent: PropTypes.number };

export default Total;
