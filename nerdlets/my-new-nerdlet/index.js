import React from 'react';
import {
  Grid,
  GridItem,
  Stack,
  StackItem,
  Dropdown,
  DropdownItem,
  TextField,
  Button
} from 'nr1';
import EmptyState from '../components/EmptyState';

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class NerdpackLayout4x2Grid extends React.Component {
  render() {
    return (
      <>
        <Stack
          className="toolbar-container"
          fullWidth
          gapType={Stack.GAP_TYPE.NONE}
          horizontalType={Stack.HORIZONTAL_TYPE.FILL_EVENLY}
          verticalType={Stack.VERTICAL_TYPE.FILL}
        >
          <StackItem className="toolbar-section1">
            <Stack
              gapType={Stack.GAP_TYPE.NONE}
              fullWidth
              verticalType={Stack.VERTICAL_TYPE.FILL}
            >
              <StackItem className="toolbar-item has-separator">
                <Dropdown label="Dropdown" title="Choose an option">
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem>Option 3</DropdownItem>
                </Dropdown>
              </StackItem>
              <StackItem className="toolbar-item">
                <TextField label="Search" placeholder="e.g. example query" />
              </StackItem>
            </Stack>
          </StackItem>
          <StackItem className="toolbar-section2">
            <Stack
              fullWidth
              fullHeight
              verticalType={Stack.VERTICAL_TYPE.CENTER}
              horizontalType={Stack.HORIZONTAL_TYPE.RIGHT}
            >
              <StackItem>
                <Button type={Button.TYPE.PRIMARY}>Primary button</Button>
              </StackItem>
            </Stack>
          </StackItem>
        </Stack>
        <Grid
          className="primary-grid"
          spacingType={[
            Grid.SPACING_TYPE.LARGE,
            Grid.SPACING_TYPE.LARGE,
            Grid.SPACING_TYPE.NONE,
            Grid.SPACING_TYPE.LARGE
          ]}
        >
          <GridItem className="primary-content-container" columnSpan={3}>
            <main className="primary-content full-height">
              {/* ⌄⌄ REPLACE THE LINE _BELOW_ WITH YOUR CONTENT ⌄⌄ */}
              <EmptyState heading="Section 1" />
              {/* ^^ REPLACE THE LINE _ABOVE_ WITH YOUR CONTENT ^^ */}
            </main>
          </GridItem>
          <GridItem className="primary-content-container" columnSpan={3}>
            <main className="primary-content full-height">
              {/* ⌄⌄ REPLACE THE LINE _BELOW_ WITH YOUR CONTENT ⌄⌄ */}
              <EmptyState heading="Section 2" description=" " />
              {/* ^^ REPLACE THE LINE _ABOVE_ WITH YOUR CONTENT ^^ */}
            </main>
          </GridItem>
          <GridItem className="primary-content-container" columnSpan={3}>
            <main className="primary-content full-height">
              {/* ⌄⌄ REPLACE THE LINE _BELOW_ WITH YOUR CONTENT ⌄⌄ */}
              <EmptyState heading="Section 3" description=" " />
              {/* ^^ REPLACE THE LINE _ABOVE_ WITH YOUR CONTENT ^^ */}
            </main>
          </GridItem>
          <GridItem className="primary-content-container" columnSpan={3}>
            <main className="primary-content full-height">
              {/* ⌄⌄ REPLACE THE LINE _BELOW_ WITH YOUR CONTENT ⌄⌄ */}
              <EmptyState heading="Section 4" description=" " />
              {/* ^^ REPLACE THE LINE _ABOVE_ WITH YOUR CONTENT ^^ */}
            </main>
          </GridItem>
          <GridItem className="primary-content-container" columnSpan={3}>
            <main className="primary-content full-height">
              {/* ⌄⌄ REPLACE THE LINE _BELOW_ WITH YOUR CONTENT ⌄⌄ */}
              <EmptyState heading="Section 5" description=" " />
              {/* ^^ REPLACE THE LINE _ABOVE_ WITH YOUR CONTENT ^^ */}
            </main>
          </GridItem>
          <GridItem className="primary-content-container" columnSpan={3}>
            <main className="primary-content full-height">
              {/* ⌄⌄ REPLACE THE LINE _BELOW_ WITH YOUR CONTENT ⌄⌄ */}
              <EmptyState heading="Section 6" description=" " />
              {/* ^^ REPLACE THE LINE _ABOVE_ WITH YOUR CONTENT ^^ */}
            </main>
          </GridItem>
          <GridItem className="primary-content-container" columnSpan={3}>
            <main className="primary-content full-height">
              {/* ⌄⌄ REPLACE THE LINE _BELOW_ WITH YOUR CONTENT ⌄⌄ */}
              <EmptyState heading="Section 7" description=" " />
              {/* ^^ REPLACE THE LINE _ABOVE_ WITH YOUR CONTENT ^^ */}
            </main>
          </GridItem>
          <GridItem className="primary-content-container" columnSpan={3}>
            <main className="primary-content full-height">
              {/* ⌄⌄ REPLACE THE LINE _BELOW_ WITH YOUR CONTENT ⌄⌄ */}
              <EmptyState heading="Section 8" description=" " />
              {/* ^^ REPLACE THE LINE _ABOVE_ WITH YOUR CONTENT ^^ */}
            </main>
          </GridItem>
        </Grid>
      </>
    );
  }
}
