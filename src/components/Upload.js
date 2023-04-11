import "../css/Upload.css"
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import ImageIcon from '@mui/icons-material/Image';
import BrushSharpIcon from '@mui/icons-material/BrushSharp';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';

const Upload = () => {

	return (
<>
		<div className="upload__mainBox">

			<div className="upload__left">
				{/* left -1 */}

				<div className="upload__leftContent">
					<div className="upload__leftHead">
						<p>Add Content</p>
					</div>
					<ul>
						<li><div className="upload__leftIcons">
							<input  type='file'
								id='picture' name='picture' title="Choose a image"
								accept='image/png, image/jpeg' />
							<ImageIcon/> 
							<p>Image</p>
						</div></li>
						<li><div className="upload__leftIcons">
							<input  type='file'
								id='picture' name='picture' title="Choose a bunch of images"
								accept='image/png, image/jpeg' />
							<AutoAwesomeMosaicIcon/>
							<p>Grid</p>
						</div></li>
						<li><div className="upload__leftIcons">
							<input  type='file'
								id='picture' name='picture' title="Choose a Video"
								accept='image/png, image/jpeg'/>
							<PlayCircleFilledIcon/>
							<p>Video</p>
						</div></li>
					</ul>
					
				</div>
				{/* left - 2 */}
				<div className="upload__leftAttach">
					<div className="upload__leftHead">
						<p>Attach Assets</p>
					</div>
					<div className="upload__leftAttachInner">

						<button><span><i className="fa-solid fa-paperclip"></i></span> Attach Assets</button>
						<p>Add files like fonts, illustrations, photos, or templates as <b>free or paid downloads</b>
						</p>
					</div>
					<div className="upload__leftAttachSettings ">
						<p className="upload__leftHead">Edit Project</p>
						<ul>
							<li><Link><BrushSharpIcon/></Link><p>Styles</p></li>
							<li><Link to="/uploadsettings"><SettingsSharpIcon/></Link>
							<p>Settings</p></li>
						</ul>
					</div>
				</div>

				{/* left - 3 */}
				<div className="upload__leftAttach_end">
					<Link to="/uploadNext" ><button>Continue</button></Link>
					<Link to="/uploadSave" ><button>Save</button></Link>
					<Link to="/uploadPreview" ><button>Preview</button></Link>
				</div>
			</div>

			<div className="upload__right">
				<h1>Start building your project:</h1>
				<div className="upload__rightContent">

					<div className="upload__rightIcons">
						<div className="upload__rightInner">
							<ImageIcon/> 
						</div>
						<h1>Image</h1>
					</div>
					<div className="upload__rightIcons">
						<div className="upload__rightInner">
						<AutoAwesomeMosaicIcon/>
						</div>
						<h1>Grid</h1>
					</div>
					<div className="upload__rightIcons">
						<div className="upload__rightInner">
						<PlayCircleFilledIcon/>
						</div>
						<h1>Image</h1>
					</div>
				</div>
			</div>

		</div>
	   </>
	)
}

export default Upload

