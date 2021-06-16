import { Room } from "./Room"
import { SearchField } from "./SearchField"


export const Rooms = () => {

    return (
        <div className="inbox_people">
            <div className="headind_srch">
                <div className="recent_heading">
                    <h4>Recent</h4>
                </div>
                <SearchField />

            </div>

            <div id='inbox' className="inbox_chat">
                <Room/>
                <Room/>
                <Room/>
            </div>
        </div>
    )

}
