import React from "react";

const Radio = () => {
    return (
        <form>
            <div class="radio">
                <label>
                    Не буди меня
                    <input
                        type="radio"
                        name="order"
                        value="1"/>
                </label>
                <label>
                    Освободи меня
                    <input
                        type="radio"
                        name="order"
                        value="2"/>
                </label>
            </div>
        </form>
    )
}

export default Radio