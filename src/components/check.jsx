import React from "react";

const Check = () => {
    return (
        <form>
            <div className="please">
                <label>
                    Посиди со мной
                    <input
                        type="checkbox"
                        name="choice"
                        value="1"/>
                </label>
                <label>
                    Поговори со мной
                    <input
                        type="checkbox"
                        name="choice"
                        value="2"/>
                </label>
            </div>
        </form>
    )
}

export default Check