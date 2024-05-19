import { ComponentFixture, TestBed } from '@angular/core/testing'

import { JokeComponent } from './joke.component'

import { DebugElement } from '@angular/core'
import { By } from '@angular/platform-browser'
import { ONEPARTJOKE, TWOPARTJOKE } from '../../../../mocks/jokes'

describe('JokeComponent', () => {
  let component: JokeComponent
  let fixture: ComponentFixture<JokeComponent>
  let el: DebugElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JokeComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(JokeComponent)
    component = fixture.componentInstance
    el = fixture.debugElement
  })

  fit('should have a one part joke', () => {
    component.joke = ONEPARTJOKE
    fixture.detectChanges()
    const text = el.query(By.css('.one-part-joke')).nativeElement.textContent

    expect(text).toEqual(ONEPARTJOKE.joke)
  })

  fit('should have a two part joke', () => {
    component.joke = TWOPARTJOKE
    fixture.detectChanges()
    const text = el.query(By.css('.two-part-joke')).nativeElement.textContent

    expect(text.includes(TWOPARTJOKE.setup)).toBeTrue()
    expect(text.includes(TWOPARTJOKE.delivery)).toBeTrue()
  })
})
