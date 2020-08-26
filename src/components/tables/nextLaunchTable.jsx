import React, { useState, useEffect } from "react";
import { nextLaunch } from "../../api/launches";

const NextLaunchTable = () => {
  const [nextLaunchData, setNextLaunchData] = useState({});
  const data = nextLaunchData;

  useEffect(() => {
    nextLaunch()
      .then((res) => res.json())
      .then((data) => setNextLaunchData(data))
      .catch((error) => error);
  }, []);

  return (
    <table className="table is-striped is-hoverable is-fullwidth">
      <tbody>
        <tr>
          <th>Name</th>
          <td>{data.name && data.name.length ? <b>{data.name}</b> : "---"}</td>
        </tr>
        <tr className="is-selected">
          <th>Details</th>
          <td>
            {data.details && data.details.length ? (
              <span>{data.details}</span>
            ) : (
              "---"
            )}
          </td>
        </tr>
        <tr>
          <th>Date</th>
          <td>
            {data.date_utc && data.date_utc.length ? (
              <span>{new Date(data.date_utc).toLocaleString()}</span>
            ) : (
              "---"
            )}
          </td>
        </tr>
        <tr>
          <th>Flight Number</th>
          <td>
            {data.flight_number ? <span>{data.flight_number}</span> : "---"}
          </td>
        </tr>
        <tr>
          <th>Capsules</th>
          <td>
            {data.capsules && data.capsules.length ? (
              <pre>{JSON.stringify(data.capsules, null, 2)}</pre>
            ) : (
              "---"
            )}
          </td>
        </tr>
        <tr>
          <th>Cores</th>
          <td>
            {data.cores && data.cores.length ? (
              <pre>{JSON.stringify(data.cores, null, 2)}</pre>
            ) : (
              "---"
            )}
          </td>
        </tr>
        <tr>
          <th>Crew</th>
          <td>
            {data.crew && data.crew.length ? (
              <pre>{JSON.stringify(data.crew, null, 2)}</pre>
            ) : (
              "---"
            )}
          </td>
        </tr>
        <tr>
          <th>PayLoads</th>
          <td>
            {data.payloads && data.payloads.length ? (
              <pre>{JSON.stringify(data.payloads, null, 2)}</pre>
            ) : (
              "---"
            )}
          </td>
        </tr>
        <tr>
          <th>Ships</th>
          <td>
            {data.ships && data.ships.length ? (
              <pre>{JSON.stringify(data.ships, null, 2)}</pre>
            ) : (
              "---"
            )}
          </td>
        </tr>
        <tr>
          <th>Rocket</th>
          <td>
            {data.rocket && data.rocket ? <span>{data.rocket}</span> : "---"}
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>Links</th>
          <td></td>
        </tr>
        <tr>
          <th>Article</th>
          <td>
            {data.links && data.links.article ? (
              <span>{data.links.article}</span>
            ) : (
              "---"
            )}
          </td>
        </tr>
        <tr>
          <th>Flickr</th>
          <td>
            {data.links && data.links.flickr.length ? (
              <span>{data.links.flickr}</span>
            ) : (
              "---"
            )}
          </td>
        </tr>
        <tr>
          <th>Patch</th>
          <td>
            {data.links && data.links.patch.length ? (
              <span>{data.links.patch}</span>
            ) : (
              "---"
            )}
          </td>
        </tr>
        <tr>
          <th>Press kit</th>
          <td>
            {data.links && data.links.presskit ? (
              <span>{data.links.presskit}</span>
            ) : (
              "---"
            )}
          </td>
        </tr>
        <tr>
          <th>Reddit</th>
          <td>
            {data.links && data.links.reddit ? (
              <>
                <a href={data.links.reddit.campaign}>
                  {data.links.reddit.campaign ? "campaign" : ""}
                </a>
                <a href={data.links.reddit.launch}>
                  {data.links.reddit.launch ? "launch" : ""}
                </a>
                <a href={data.links.reddit.media}>
                  {data.links.reddit.media ? "media" : ""}
                </a>
                <a href={data.links.reddit.recovery}>
                  {data.links.reddit.recovery ? "recovery" : ""}
                </a>
              </>
            ) : (
              "---"
            )}
          </td>
        </tr>
        <tr>
          <th>Web cast</th>
          <td>
            {data.links && data.links.webcast ? (
              <span>{data.links.webcast}</span>
            ) : (
              "---"
            )}
          </td>
        </tr>
        <tr>
          <th>Wikipedia</th>
          <td>
            {data.links && data.links.wikipedia ? (
              <a href={data.links.reddit.wikipedia}>
                {data.links.wikipedia ? data.links.wikipedia : ""}
              </a>
            ) : (
              "---"
            )}
          </td>
        </tr>
        <tr>
          <th>YouTube</th>
          <td>
            {data.links && data.links.youtube_id ? (
              <pre>{data.links.youtube_id}</pre>
            ) : (
              "---"
            )}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default NextLaunchTable;
