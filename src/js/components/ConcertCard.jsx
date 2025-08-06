import React from "react";

const ConcertCard = ({ date, time, location, details, ticketLink }) => {
  return (
    <div className="col-md-6">
      <div className="card shadow-sm h-100 border-0">
        <div className="card-body">
          <h5 className="card-title">{date} · {time}</h5>
          <p className="card-text mb-1"><strong>📍 {location}</strong></p>
          <p className="card-text text-muted">{details}</p>
          {ticketLink && (
            <a href={ticketLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark mt-2">
              Conseguir entradas
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConcertCard;
