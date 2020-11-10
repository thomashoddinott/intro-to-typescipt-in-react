import React from 'react'

export interface PersonProps {
  name: string | {firstName: string; lastName: string};
  birthDate: Date;
  birthLoc: {
    lat: string;
    long: string;
    height?: number
  }
}

export function Person(props: PersonProps) {
  return (
    <>
    <div>
      <div>Name: {props.name}</div>
      <div>Birth Date: {props.birthDate}</div>
      <div>Birth Loc: {props.birthLoc.lat}, {props.birthLoc.long}, {props.birthLoc.height}m</div>
    </div><br/>
    </>
  )
}