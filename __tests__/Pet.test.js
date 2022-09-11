/**
 * @jest-environment jsdom
 */

import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import Pet from "../src/Pet";
import { StaticRouter } from "react-router-dom"

test("displays a default thumbnail", async () => {
    const pet = render(
        <StaticRouter>
            <Pet images={["1.jpg", "2.jpg", "3.jpg"]} />
        </StaticRouter>
    );

    const petThumbnail = await pet.findByTestId("thumbnail");
    expect(petThumbnail.src).toContain("1.jpg");
}); 