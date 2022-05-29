import { useAppSelector } from '../../store/app/hooks';
import { useDispatch } from 'react-redux';

import {
  addNewSharedLocation,
  editSharedLocation,
} from '../../store/slices/SharedLocationSlice';

import { toggleModal } from '../../store/slices/modalPanelSlice';

import classes from './popupContent.module.css';

import communereLogo from '../../assets/logos/communereLogo.svg';
import { togglePopup } from '../../store/slices/leafletMapSlice';

const PopupContent: React.FC = () => {
  const SharedLocations = useAppSelector(state => state.sharedLocations);
  const dispatch = useDispatch();

  const popupEditClickHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    dispatch(togglePopup());

    const locationId = Number(
      event.currentTarget
        .closest('.location-popup-container')
        ?.querySelector('.popup-location')
        ?.getAttribute('data-id')
    );

    console.log(locationId);

    SharedLocations.forEach(location => {
      console.log(location);
      // if (location.id === locationId) {
      //   dispatch(
      //     addNewSharedLocation({
      //       locationClicked: location.locationClicked,
      //       locationName: location.locationName,
      //       locationLatLang: {
      //         lat: location.locationLatLang.lat,
      //         lng: location.locationLatLang.lng,
      //       },
      //       id: location.locationLatLang.lat,
      //       locationType: location.locationType,
      //       locationLogo:
      //         'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgUFRIZGRgZGRISHBESGBkUGRgYGBwaGhwYGRwcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzEjISExNDE1NT8xMTE0MTQ0MTE0NDE0NDE0NDQ0NDQ0MTQxMTQ0NDQ0MTQxPzQ0NDQ/NDQxP//AABEIAF8BkAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgEDBAUHAgj/xABCEAACAQMBBQUDCAgEBwAAAAABAgADBBESBQYTITEHIkFRYRRxkTI0QlJyc7GyIyQ1Q2J0gYMzU4KSFSWhwdHS8f/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAKhEAAgICAQMBCAMBAAAAAAAAAAECEQMhMRJBURMEIiNhgZGhsRRxcjL/2gAMAwEAAhEDEQA/AOzREQBERAEpBMs1qwQFmYADJJY4AEVYLsxLu+SkMuwH4k+gka2nvaM6Lcaj01kcv6CWbDYdau3ErsQD4NzYj/sJ2jhpXPS/JpJdzJbfNFqBWpkIfp9SPUiSW1u0qKGRwynxU5mBV3ft2ThmmMef0gfPMjNfYFxaNxLZyy9Sv0seo6GVxxy1HT/YddifCJF9k71K+FqjQ/TJ6EySq4IyDn1HOcpQlHkjVFyIiZIIiWqlQKCWIAHMknAA9TALkSP3O+Vihw10mf4cv+UGXLPemzq4CXSZPgW0n4NL0S8MtG9ieFYEZHxnuQgiIgCJSJLBWIiUCIiAIiJAIiJQIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAlJWUMAi+3976NuSi9+oOWkcgD/EZGrahd7RbUzaaeeR6IPRR4kTbXC2l/WqUGQpWRnTWuMkIcZmrexvNntqRtVPxIBZSP4l8DPbiUFGo6l8yoqLC4sX4mgOvTXjIx+IMlmyd4qdXAbuP9VvH7JmNsfeilXAVwEc8tLHKn3ExtLdlHy9LCN5fRaZnLqdZFT8m9PnRJNUj2196qNLKr336aV6A+pkfubO/ci3UsqYyWJwAOmNU3uxt1KNDDP3366m6A+gnP04Q23bM1RpKGyri8biuoRT4kYyP4RMse0WR5nXT+I/8gzZbU3np08qnffphegPqRNdb2FxdEPWYqnl/wCqzqpNr3qUTon54N/svbdOtyHdfGdDTbTQ2rULeotFV77YBPU8xnJM308uRJPXDOcqvXAM4/2hbdqV7j2OkTpUimVX6bmdfbpOHbsLxNrJr6mtXf8AqBUedcCW5eEESjZvZcmkGvXcvyytPCqJbvuysY/Q3Jz9WqB+KzpwErM+tLyRsxbC34dNKf1FVPgMS8zgdTj3nE0+9W2RaW7VsZbkqqehYzlOzdn321GepxDgHBd2KoCeelVERx9S6m6QSO3hgenxHOepw9ri92XXVWqEqcNpJLI6zpu29qFtn1LiixUmkaiMvUExLE1XdMUSB3A6nHqcSq1AehB9xBnC9g7Lutos+Lg5QISajMc6pY21ZXVg/Cas3fXVqR2wROi9nV9Nqy0d5NZc41DPlkZl3M4om5d21uLla4OUWsFDPqIK6pv+zHeOpUZraq5fCl0duuAcFZiWGk2ndEaOlky3xlzjUM+WRmcq7UNp1luFppVdU0K2hGIBYzBqbkXoo8cVlbuCpoDPqxjVEcKaTbqy0dkaoB1IHvIELUU9CD6ggzguxbW5vqnBFwcqhILu+AomVtC3vNl1kPG698FCzKwBwQymbfs6Tq9ijueYBkcvto8XZ1SuvdL21WoMHmDokO7Kbyo9eqHqM36NSAxJ+lOKxtpvwSjqhgGc97V7l0p0SjsuXYEoSsztx7hm2ZrLkti4OpjkggtL6T6eryxRMmYCeVqqejA+4gzg+zFu7+vwhcNqw75d2xgTL21sG82eErcbqQuumzcmnT+Orq9stHccyhaR/c3bRurVar41jUjY818ZzneHb9xfXPs9uxCayiqhxqxyLPOccLba4olHY1rKejA+4gmXcziO1d1L6zTj8TIXBJpu2pZO+z3eVrqmy1f8SngFvrKehmpYaXUnaFEx1TyKik41DPlkZnGN9No3D31S3Wu4XXTRUDFVGpRJXubujcWtwa1aqrjQyAKzEgkjmdUjxdMbb5K0T4meFrKTgMCfIEEzkG9W8VxeXJtbdiE1mmFQlS5BwS0xtpbo31qnH4mdPePDdtSzSwaVtJsUdszKyDdnW8zXKNSqnNSmFOrxZTJzOM4uMqZGViIkIIiIAiIgCeWnqeWEgOU2m0VtdpVqlRWCl6y9D0LEhp0u1u6dZQyOrqfqkGRw3NrfValtVpkVEaooboSEYrlWEyt3910tmZxUdjzGOi49QOpnoyOMkm7TS+4Rb2vupTfL0u4/XA+STMTc+7qcR6LPqVVbkTnBVgvIyZN0kJ3Q+dVfs1PziWMnLG1LdGk9E3xIHvXd1nuVtVfSjBOQ5ZLeZk8kB21+1KX9uZ9nS6m+aTIjf7H3apUcMRrfrrbwP8Im2urtKa6nYKPU4mVNHtLYCVnDl28iucgj0zMdXU/eZU75NJQuONeq6A4yvh4BQMmTYTSU7ijQqJQRME4zgYxkdSfEzdgS5XdapUJFGnDdgPwNrLr5Yr1k5+b60nc5y/tE3VqGp7XbqWJwWRObBh9MTeGSVxfdBM6gIzOP7O7SbimoSpSDkctTZQy3e7+X1z3KNPRnwoqzvJ/Hl8qFEm7W/m1P7wTJ7KwPYf7lXMrebvvcbMSi5PGCI+ahJPE6kNIFsHeO42az0npcs5NOplSG81m0urH0rlMUSPtgAxb++pM+3J/4GfuWkLvru62rcKBT5DuhUB0opOSzNOk7fsBR2XUor0SiUmn7sYxfNgivY98u4+zSmP2v/OKP3bfmmV2Pqddx7qUx+15Tx6PL92354tesL2T3d/5hQ/lqX5JzHsu+fD7upOn7A+Y0f5el+Scx7Lwfbhy/d1JmD92QLnav88X7sTqVIfqg+4X8k5f2rA+1ry/drOo0j+qD7gfkkn/zENnK+y759/oqTa9sXyrf3VJq+zBSL48voVJte19SWoe6pOjfxk/kO5vbH9it/K1vytIx2QfOK33a/mkz3ctOLsunSP06L0/92ROX7LvLjZdw+qlk4KFXyFZeoZSJmO4yiuWwTDtf/wAOh9tpsNxP2Ufs3X4vIFvTvU98EQ0QuglhpJYkmT/cui6bLKuhVtNydLAqcEtEl041F82UhfZb8/8A7dSTPtY+ZL99S/BpDuy9T7cOR/w6kmPauubJcf51P8Hib+KvoR8mP2ZfMan26s5vsUXHH/VdXF/SHuFc48cZnTeypP1NgfrvIZtzZdxsy749JSU1M61ACQQ3VHm4SXVJd39hZk3Fttt1ZGWqVIKlSaeCDNz2a7CubatUatSZFZAoLEEE5mvftQrkYW3QN9bJMmW4u0LivQarcZDM7aVZdOFA8JicpKFNJJhnON5P2u/31L8Kc7XXHcb7LfhOLbyIf+LNy/fUfwSdt8JnM9R/oNnzzs4XBuT7Nq4uqqV04z641SS1qG23Uqy1SGBUqTTwQZj7y7HuLC79ppKShc1FcAlQSclHmee0+uVwLdNXTVkzvKTdOKTLZl9nGwLm3uHetRZFKFQzFZ1ASJbhbRuLinUq3HLLgIpXQAoHhJdPHlk5S3yZZWIiYIIiIAiIgCUMrKGQHNd2P2rX+3c/nnSZyi6qVrG+qXDUiUd6hBOcFXYnkRmS9d9LU0+JqOf8rHfzPTlxyk047VIIk5nP93bxKVzULtpB4iZPmXBGYo7cvbuoOAuhVPvX/UTJDfbvJVUFsLUwCXpjAJ9QYjFY7jLv+Da19TdNXULqLDT11EgADzzOfXV6lbadN6bBlBRdQ8xPFfYlWpVFr7SgQZfSGznPksl2zNgU7ZDwlBfB779SZUo4b3ba/ZGqN4IkIO8V1QqEXFLuk8tIwAPRuhm5qbz24TUHyT9AfKzOXpS7bsUzX3X7QX/R+WS6QvZge4uBX0aVBHP0AwBz6mTSXNql3SLPsepQys8McDJ8Oc4mDHrWNNzl6SMfNkVj8SJcpUFUYVFX0VQB8BLVlepVQVEcMpz3l6HBmNS21QZtC1VJzpHUAnyB6EzWym0mPXtkf5aK2PrKGx7sieHvEBcFhmmq1GyD3VbUQT/RWl+nUDAMOhAYH0IzHBDzRoKowqhQPooAo+Al7E1VntyhVZVpvq1ZwQrAEAZ6kTYVKiqCzHAAJLE4AA8TI7spdxGJrrPa1Go2lKgJ6hTkEgeK56iZNG5VywU50MUb0YAHHwIMbIZGJQKJi0rxGTiKw0YY684GFJDH+mmKN9TemKquChBfWOmB1MbBlYlcS0tQFQwPdIDZ9CM5mDW2zRRFqM+EYFg4ViCB1JwI2U2eIxNXS21QZDUFTuLpBYqygZ6HmJlvdKrKhbvPkqvUkAZJjYMkCWK9ujjDorDrhwGAPuMtXt4lJdbtpGVXOCcljgDAniy2lSrEim4JHVcFSPIkEAxsF+laonyKaL9hQv4CZE1VDblB2CI+o5K8lbGQcEZxM2hdK4Yqc6WZD6MvUGV2QvgSs1dbbdBQjGpycFlIDHUB1IAEu09pUyqtq5Oy0wWBUlj0XBElMpn4nhlBGCM+GCMiea9ZUUuzBVUElmOAAPEzCs9r0azaEcFsatJBUkeYBHMRshfp2FJTqWkgP1lRQfiBMvE1L7ctwxQ1ACDoOQwAbpgtMs3qcQUtY1ldYTxK5xkSuymVpErMQ3tMVBR1jiFS+jxKggFpi09uUGbQHJbUUwFYjUDgjOJKZDZlQZirs+kDqFJAeuQqg5ijeozvTVwXTTqUdRqGRn3y1V2pSVdZfu6mTUqs3eVirDAB6ES7RTYSs12z9q0q+eE+rlnOGAx05EibGQFYiIIIiIAiIgCIiAY9xbJUUq6hlPIqwBBkWG4tuKmvU2nrwpMJTE1HJKPDopDk3qo0XNHgMiLy1Y0kHz0zGu9v1rluFboQv1h8ojzJ6ASU7T2RSuBioufJhyYe4yIXGxLi0fiUHLL5gcwOuGWejG8b/wBfg1Gvqerzcuoyh0q4qrkgdF88BpTZu9Vag3BvEORyFTHOLzfd0QKtLNU8s9V+EtbP3ZuLpuPduVB6JgBiv4LOm6+NVdvJHybi33jpXVTgcBmQ8tRGf6keAmTQ3ToK+vvEdQh6Cbaw2dToLppoFHoMk+pMzZ5ZZKdQtIWeKaBRhQAByAAwBLkCVnLkyJpN5a7CiUT5dUiioBAOW6nJ8hN3LLoCQSM45g45g9OUqBErZHQXNstPQWptVpIWVj00sAV9Z5udoKaFBKIouM0k4FTVrDgr8lV6Fe8STJdwxnOBkZAOOYBxkZnhbRA2oU11fWAAM1ZbNDefLv8A+WpfkrTa7Nu6bU0VKiMQid1WViO74gGZhoqc90cxg5HUeRlqjZU0OVpop6ZVVU4/oJARvdCu/BoKbmkV0ACiq4f48Qza70g+znkSA1NmVRkmmrgsPhM6nYUlIZaSBhzBCgEH3gTKx/8ADF7sMi13tOlWrUKdFtTpUp1MpggUyp1tkfAy/s+8Sk9ytR1Qmsao1kLlGSmAy59RNwmzqQYMKaBhkhlUKQSMHpLla1RiC6KxHQsAfxi0CJqXFjRoKpL1iy6eStw2ZnY8/wCCXrRmRLqgyaAFqVkQlWwjqcgEHGA0lPDU4OBkZAOBke6Uakp5lR005IBJHl7osWa/Z93TaggWojHhJ3VZWPJfIGYFoP8Alv8AYqfgZuqFjTQ5Wmik5GVUA4l/hLjTgY6acDGPLEWLMCxoK9uiMMq1NFI6ggrNZuzanNRncu1N3tUZhgimh/E+JkjVcAAeHLHQSiUwucDGSW5eZ6mLFmm3nYKlJicAXNoSScAAVFMsm4p1Lum1JgxRKwqMnMYbRoVmHrN9Woqwwyhh9VgGHwMpSoKowqhR5KAo/wCkWLIruvWfhge00guuqOCV7/y25Z4k9bZqNSqvRTl7UECEfRqcqbn/AGaDJGthTB1CmgbrqCgHPnnEvPTBIJAOOhIyQfSL2LIvtVeHcWqpUSnpp1lDVBqUKAgxjKy/tet+jt2eqj4ubcmomFXr7zN9XtUbGtFbH1wG/GefYqenRw109dOldOfPEWLNTvDXRqIZXDItSi1QIQ/cDAtkDMtX10lWtbcJ1d1cuWQg6aekhtRHQGbyjaIoIRFXPUKAoPvAlaVsi50oq55nSAvxxFiyMJZ16y3NFeGtN61VTUYsXAJGcKAB7jmeNs0ylzxlzmhSpuR1LU9TK4+ElyqBnA8SeXmZRqSknIHMaScdR5GExZENld+9Suf3tOuV9KaNTVZkbDquCR7TSC8Wt+hZBrxrbkG19T7pJloqMd0chpBAxgeQlsWFPVr4aas6tWkZz55hsWRn2VvaLmvTGXSpT7v10NNMoZs91aoe31r0arcsA3XBquZuFpgEkADODkciTjHOEpBRgAAczgchknJMNizU7o/NKP2T+abuW6aBRgDA8gMAS7IQREQBERAEREAREQBERAE8kT1EAwF2XRD8ThJr6a8DMzcT1KQ22CsREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQD/9k=',
      //     })
      //   );
      // }
    });
    // {if(location.id===locationId)
    //   )}

    /*
    FIXME
    Just a workaround for canceling edit event
    instead get location information in modal panel when editing
    */

    // dispatch(toggleCancelButton());
    dispatch(toggleModal());
  };

  const popupCloseClickHandler = (e: React.MouseEvent) => {
    dispatch(togglePopup());
  };

  return (
    <div
      className={`${classes['location-popup-container']} location-popup-container`}
    >
      <header className={classes['popup-header']}>Location Details</header>
      {SharedLocations.map(
        location =>
          location.locationClicked && (
            <div
              className={`${classes['popup-location']} popup-location`}
              data-id={location.id}
            >
              <h2 className={classes['popup-location-item__name']}>
                {location.locationName}
              </h2>
              <div className={classes['popup-location-item__type']}>
                {location.locationType}
              </div>
              <div>
                <span className={classes['popup-location-item__logo']}>
                  <img
                    src={communereLogo}
                    alt={` ${location.locationName} logo`}
                  />
                </span>
              </div>
            </div>
          )
      )}

      <button
        className={`${classes['close-popup']} ${classes.btn}`}
        onClick={popupCloseClickHandler}
      >
        Close
      </button>

      <button
        className={`${classes['edit-popup']} ${classes.btn}`}
        onClick={popupEditClickHandler}
      >
        Edit
      </button>
    </div>
  );
};

export default PopupContent;
