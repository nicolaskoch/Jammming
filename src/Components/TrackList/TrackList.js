import React from 'react'
import './TrackList.css'
import Track from '../Track/Track'

class TrackList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let tracks
    if (this.props.tracks) {
      tracks = this.props.tracks.map((track) => (
        <Track
          key={track.id}
          track={track}
          onAdd={this.props.onAdd}
          onRemove={this.props.onRemove}
          isRemoval={this.props.isRemoval}
        />
      ))
    }
    return <div className="TrackList">{tracks}</div>
  }
}

export default TrackList
