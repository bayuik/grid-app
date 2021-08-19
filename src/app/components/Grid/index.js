import { useDispatch, useSelector } from "react-redux";
import AddTileButton from "../AddTileButton";
import Tile from "../Tile";
import {addTile, removeTile} from '../../features/Grid/actions'

const colors = ["red", "blue", "pink", "yellow", "gray"];
const Grid = () => {
  let gridTiles = useSelector((state) => state.grid);
  let dispatch = useDispatch();
  return (
    <div>
      <div style={{ maxWidth: 400, overflow: "hidden" }}>
        {gridTiles.map((tile, index) => {
          return <Tile {...tile} key={index} onDoubleClick={_ => dispatch(removeTile(tile.id))} />;
        })}
      </div>
      <br />
      <div>
        {colors.map((color) => {
          return <AddTileButton key={color} color={color} onClick={_ => dispatch(addTile(color))} />;
        })}
      </div>
    </div>
  );
};

export default Grid;
