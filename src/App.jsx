import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.scss';
import './index';
import './DropDown';
import DropDown from "./DropDown";


/**
 * @param this          Information about the object.
 * @param this.props.onClick   Information about the object members.
 */

/**
 * @param this          Information about the object.
 * @param this.props.isOpen  Information about the object members.
 */

// Creating new array with URLs for images
let imgUrls = [
  'https://images.wallpaperscraft.com/image/palms_road_marking_123929_800x600.jpg',
  'https://images.wallpaperscraft.com/image/water_sea_sunset_137707_800x600.jpg',
  'https://images.wallpaperscraft.com/image/water_sunset_trees_134409_800x600.jpg',
  'https://images.wallpaperscraft.com/image/water_ripples_lake_144929_800x600.jpg',
  'https://images.wallpaperscraft.com/image/water_horizon_sunset_136056_800x600.jpg',
  'https://images.wallpaperscraft.com/image/water_glare_sunset_125624_800x600.jpg',
  'https://images.wallpaperscraft.com/image/water_surface_sky_planets_stars_2775_800x600.jpg',
  'https://images.wallpaperscraft.com/image/water_sunset_blur_128151_800x600.jpg',
  'https://images.wallpaperscraft.com/image/water_sky_horizon_144645_800x600.jpg',
  'https://images.wallpaperscraft.com/image/water_sky_evening_15163_800x600.jpg',
  'https://images.wallpaperscraft.com/image/water_surface_drops_wet_sea_18255_800x600.jpg',
  'https://images.wallpaperscraft.com/image/water_spray_splash_115567_800x600.jpg'
];

// Component for app image
class AppImage extends React.Component {
  render() {
    return(
        <img className={this.props.className} src={this.props.src} alt={this.props.alt} />
    )
  }
}


// Component for app modal
class AppModal extends React.Component {
  render() {
    if (this.props.isOpen === false) {
      return null;
    }

    return(
        <div isOpen={this.props.isOpen} className='modal-overlay' onClick=
            {this.props.onClick} name={this.props.name}>
          <div className='modal-body'>
            <a className='modal-close' href='#' onClick=
                {this.props.onClick}> <i className="fa fa-times"/></a>

            <img src={this.props.src} />
          </div>
        </div>
    )
  }
}

// Component for app
class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      className: 'col-sm-6 col-md-3 col-xl-2',
      showModal: false,
      url: ''
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  // Method for updating columns
  updateColumn(dropdownValue){
    let obj={
      showModal: this.state.showModal,
      url: this.state.url
    }

    let cls=this.state.className;
    switch(dropdownValue){
      case "one-column":
        cls='col-sm-12 col-md-12 col-xl-12';
          break;

      case "two-columns":
        cls='col-sm-6 col-md-6 col-xl-6';
        break;

      case "three-columns":
        cls='col-sm-6 col-md-4 col-xl-4';
        break;

      case "four-columns":
        cls='col-sm-6 col-md-3 col-xl-2';
        break;

      case "list-view":
        cls='col-sm-6 col-md-3 col-xl-2';
        break;
    }
    obj.className= cls;
    this.setState(obj);

  }


  render() {

    return(
        <div refs='app-container' className='container-fluid app-container'>
          <DropDown updateColumn={this.updateColumn.bind(this)} />
          <div className='row'>
            {
              imgUrls.map((url, index) => {
                return <div
                    key={index+1}
                    className={this.state.className} >
                  <div className='app-card'>
                    <AppImage className='app-thumbnail' src={url} alt={'Image number ' + (index + 1)} />

                    <i className="card-icon-open fa fa-expand" value={url} onClick={(e) => this.openModal(url, e)}/>
                  </div>
                </div>
              })
            }
          </div>

          <AppModal isOpen={this.state.showModal} onClick={this.closeModal} src={this.state.url} />
        </div>
    )
  }

  // Function for opening modal dialog
  openModal(url, e) {
    this.setState({
      showModal: true,
      url: url
    })
  };

  // Function for closing modal dialog
  closeModal() {
    this.setState({
      showModal: false,
      url: ''
    })
  }
}
export default App;