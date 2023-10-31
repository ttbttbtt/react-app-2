import React from "react";

const Input = () => {
    return (
        <form>
            <label>
                Не хватает лишь пары слов
                <input
                    type="text"
                    placeholder="Напиши их здесь"    
                />
            </label>
        </form>
    )
}

export default Input